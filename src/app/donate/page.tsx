'use client';
import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Heart, Shield, CheckCircle, Smartphone, Loader2,
  AlertCircle, IndianRupee,
} from 'lucide-react';

// ─── PayU Configuration ───────────────────────────────────────────────────────
const PAYU_CONFIG = {
  key: process.env.NEXT_PUBLIC_PAYU_KEY ,
  salt: process.env.NEXT_PUBLIC_PAYU_SALT,
  payuBaseUrl: 'https://secure.payu.in/_payment', 
};
// ─────────────────────────────────────────────────────────────────────────────

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000, 25000];

const IMPACTS: Record<number, string> = {
  500:   'Provides stationery for 5 students for a month',
  1000:  'Funds medical check-up for 10 underprivileged families',
  2500:  'Trains a woman in vocational skills for one month',
  5000:  'Plants 50 trees and supports community forestry',
  10000: "Sponsors a child's education for one full year",
  25000: 'Sets up a micro-enterprise for a rural woman',
};

// SHA-512 using Web Crypto API (no backend needed)
async function sha512(str: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-512', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function generateTxnId(): string {
  return 'AWT' + Date.now() + Math.random().toString(36).slice(2, 7).toUpperCase();
}

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount]     = useState('');
  const [loading, setLoading]               = useState(false);
  const [amountError, setAmountError]       = useState('');

  const finalAmount = selectedAmount ?? (customAmount ? parseInt(customAmount) : null);

  const currentImpact = finalAmount
    ? (IMPACTS[finalAmount] ?? 'Your donation will directly support our community programs across India.')
    : null;

  async function handleDonate() {
    setAmountError('');

    if (!finalAmount || finalAmount < 1) {
      setAmountError('Please select or enter a minimum amount of ₹10');
      return;
    }

    setLoading(true);

    try {
      const txnid       = generateTxnId();
      const amount      = finalAmount.toFixed(2);
      const productinfo = 'Donation to Achariya Welfare Trust';
      const firstname   = 'Donor';                       // generic — no form field
      const email       = 'donor@achariyatrust.org';     // generic — PayU requires it
      const { key, salt, payuBaseUrl } = PAYU_CONFIG;

      // PayU hash: key|txnid|amount|productinfo|firstname|email|||||||||||salt
      const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
      const hash = await sha512(hashString);

      // Build a hidden form and POST to PayU — redirects the browser to PayU checkout
      const payuForm = document.createElement('form');
      payuForm.method  = 'POST';
      payuForm.action  = payuBaseUrl;
      payuForm.style.display = 'none';

      const fields: Record<string, string> = {
        // key,
        txnid,
        amount,
        productinfo,
        firstname,
        email,
        phone:            '9999999999',   // required by PayU; donor can edit on PayU page
        surl:             `${window.location.origin}/donate/success`,
        furl:             `${window.location.origin}/donate/failure`,
        hash,
        service_provider: 'payu_paisa',
        udf1:             '',
        udf2:             '',
        udf3:             '',
        udf4:             '',
        udf5:             '',
      };

      for (const [name, value] of Object.entries(fields)) {
        const input   = document.createElement('input');
        input.type    = 'hidden';
        input.name    = name;
        input.value   = value;
        payuForm.appendChild(input);
      }

      document.body.appendChild(payuForm);
      payuForm.submit(); // Redirects to PayU — loading stays true intentionally
    } catch (err) {
      console.error('PayU init error:', err);
      setLoading(false);
      alert('Something went wrong. Please try again or use bank transfer.');
    }
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-saffron via-crimson to-deepred text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 rangoli-bg" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <p className="font-hindi text-3xl text-gold mb-2">दान महादान है</p>
            <h1 className="font-display text-5xl font-bold mt-2 mb-4">
              Make a <span className="text-gold">Donation</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Your generosity transforms lives. Every rupee donated reaches people who need it most —
              verified, transparent, and impactful.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {[
                { icon: Shield,       label: '80G Tax Exemption' },
                { icon: CheckCircle,  label: '12A Registered'    },
                { icon: Heart,        label: 'FCRA Compliant'    },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm">
                  <Icon size={14} /> {label}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── LEFT: Donation Form (amount only) ── */}
          <AnimatedSection direction="left">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
              <h2 className="font-display text-2xl font-bold text-crimson mb-6">Choose Amount</h2>

              {/* Preset amounts */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {PRESET_AMOUNTS.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => { setSelectedAmount(amt); setCustomAmount(''); setAmountError(''); }}
                    className={`py-3 rounded-2xl font-bold text-sm border transition-all ${
                      selectedAmount === amt
                        ? 'bg-gradient-to-br from-saffron to-crimson text-white border-transparent shadow-lg scale-105'
                        : 'bg-orange-50 border-orange-200 text-crimson hover:border-saffron'
                    }`}
                  >
                    ₹{amt.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="mb-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Or Enter Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₹</span>
                  <input
                    type="number"
                    min={10}
                    placeholder="Enter amount..."
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                      setAmountError('');
                    }}
                    className="w-full border border-gray-200 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/30 focus:border-saffron transition-all"
                  />
                </div>
                {amountError && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {amountError}
                  </p>
                )}
              </div>

              {/* Dynamic impact line */}
              {currentImpact && (
                <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-2.5 text-green-700 text-xs flex items-start gap-2 my-4">
                  <CheckCircle size={14} className="mt-0.5 shrink-0" />
                  <span>{currentImpact}</span>
                </div>
              )}

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                disabled={loading}
                className="btn-primary w-full text-base py-4 flex items-center justify-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <><Loader2 size={18} className="animate-spin" /> Redirecting to PayU...</>
                ) : (
                  <>
                    <Heart size={18} />
                    Donate {finalAmount ? `₹${finalAmount.toLocaleString('en-IN')}` : ''} via PayU
                  </>
                )}
              </button>

              {/* Security badges */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px]">✓</span>
                  Secured by PayU
                </span>
                <span className="w-px h-4 bg-gray-200 hidden sm:block" />
                <span>🔒 256-bit SSL</span>
                <span className="w-px h-4 bg-gray-200 hidden sm:block" />
                <span>💳 UPI · Cards · Net Banking · Wallets</span>
              </div>

              {/* How it works */}
              <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-3 text-xs text-blue-700 leading-relaxed">
                <strong>How it works:</strong> Clicking "Donate" will securely redirect you to PayU's
                payment page where you can pay via UPI, Debit/Credit Card, or Net Banking.
                After payment you'll be redirected back with your receipt.
                80G receipt will be emailed within 7 working days.
              </div>
            </div>
          </AnimatedSection>

          {/* ── RIGHT SIDE ── */}
          <AnimatedSection direction="right" className="space-y-6">

            {/* Impact table */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 border border-orange-100">
              <h3 className="font-display text-xl font-bold text-crimson mb-1">Your Donation Impact</h3>
              <p className="text-xs text-gray-400 mb-4">Click any row to select that amount</p>
              <div className="space-y-2">
                {Object.entries(IMPACTS).map(([amt, impact]) => (
                  <button
                    key={amt}
                    onClick={() => { setSelectedAmount(Number(amt)); setCustomAmount(''); setAmountError(''); }}
                    className={`w-full flex items-start gap-3 text-left rounded-xl p-2.5 transition-all ${
                      selectedAmount === Number(amt)
                        ? 'bg-white shadow-md ring-1 ring-saffron/30'
                        : 'hover:bg-white/70'
                    }`}
                  >
                    <span className={`text-white text-xs font-bold px-2.5 py-1 rounded-lg shrink-0 mt-0.5 transition-colors ${
                      selectedAmount === Number(amt) ? 'bg-crimson' : 'bg-saffron'
                    }`}>
                      ₹{Number(amt).toLocaleString('en-IN')}
                    </span>
                    <p className="text-gray-600 text-sm">{impact}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Bank transfer */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-display text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <IndianRupee size={18} className="text-saffron" /> Bank Transfer
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  ['Account Name', 'Achariya Welfare Trust'],
                  ['Bank',         '[Your Bank Name]'       ],
                  ['Account No.',  'XXXX-XXXX-XXXX'         ],
                  ['IFSC Code',    'XXXXXXXXXX'              ],
                  ['Branch',       'Hisar, Haryana'          ],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between py-1.5 border-b border-gray-50 last:border-0">
                    <span className="text-gray-400">{label}</span>
                    <span className="font-semibold text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">
                📧 Email transfer screenshot to{' '}
                <span className="text-saffron">info@achariyatrust.org</span> for 80G receipt.
              </p>
            </div>

            {/* UPI direct */}
            <div className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-saffron to-crimson rounded-2xl flex items-center justify-center text-white shrink-0">
                <Smartphone size={26} />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Direct UPI Payment</p>
                <p className="text-saffron font-bold text-lg">achariyatrust@upi</p>
                <p className="text-xs text-gray-400">Scan QR or use UPI ID in any app</p>
              </div>
            </div>

            {/* Trust credentials */}
            <div className="bg-gradient-to-br from-gray-900 to-deepred rounded-3xl p-5 text-white">
              <p className="font-semibold text-gold mb-3 text-sm">Donate With Confidence</p>
              <ul className="space-y-1.5 text-xs text-white/80">
                {[
                  'Registered under Indian Trusts Act',
                  '80G Income Tax Exemption Certificate',
                  '12A Registration — donations tax-exempt',
                  'FCRA Compliant for foreign contributions',
                  'Annual reports published transparently',
                  'PayU PCI-DSS certified payment processing',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle size={12} className="text-gold shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}