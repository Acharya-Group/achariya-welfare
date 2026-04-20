// components/home/DonateSection.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Heart, Shield, CheckCircle, Smartphone, Loader2, AlertCircle, IndianRupee, Sparkles, ArrowRight, Building2, Landmark, Clock } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Para from '../common/Para';
import SubHeading from '../common/SubHeading';
import CommonButton from '../common/CommonButton';

// ─── PayU Configuration ───────────────────────────────────────────────────────
const PAYU_CONFIG = {
  key: process.env.NEXT_PUBLIC_PAYU_KEY,
  salt: process.env.NEXT_PUBLIC_PAYU_SALT,
  payuBaseUrl: 'https://secure.payu.in/_payment',
};

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000, 25000];

const IMPACTS: Record<number, string> = {
  500: 'Provides stationery for 5 students for a month',
  1000: 'Funds medical check-up for 10 underprivileged families',
  2500: 'Trains a woman in vocational skills for one month',
  5000: 'Plants 50 trees and supports community forestry',
  10000: "Sponsors a child's education for one full year",
  25000: 'Sets up a micro-enterprise for a rural woman',
};

// SHA-512 using Web Crypto API
async function sha512(str: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-512', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function generateTxnId(): string {
  return 'AWT' + Date.now() + Math.random().toString(36).slice(2, 7).toUpperCase();
}
export default function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [amountError, setAmountError] = useState('');

  const finalAmount = selectedAmount ?? (customAmount ? parseInt(customAmount) : null);
  const currentImpact = finalAmount
    ? (IMPACTS[finalAmount] ?? 'Your donation will directly support our community programs across India.')
    : null;

  async function handleDonate() {
    setAmountError('');

    if (!finalAmount || finalAmount < 10) {
      setAmountError('Please select or enter a minimum amount of ₹10');
      return;
    }

    setLoading(true);

    try {
      const txnid = generateTxnId();
      const amount = finalAmount.toFixed(2);
      const productinfo = 'Donation to Achariya Welfare Trust';
      const firstname = 'Donor';
      const email = 'donor@achariyatrust.org';
      const { key, salt, payuBaseUrl } = PAYU_CONFIG;

      const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
      const hash = await sha512(hashString);

      const payuForm = document.createElement('form');
      payuForm.method = 'POST';
      payuForm.action = payuBaseUrl;
      payuForm.style.display = 'none';

      const fields: Record<string, string> = {
        key: key || '',
        txnid,
        amount,
        productinfo,
        firstname,
        email,
        phone: '9999999999',
        surl: `${window.location.origin}/donate/success`,
        furl: `${window.location.origin}/donate/failure`,
        hash,
        service_provider: 'payu_paisa',
        udf1: '',
        udf2: '',
        udf3: '',
        udf4: '',
        udf5: '',
      };

      for (const [name, value] of Object.entries(fields)) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        payuForm.appendChild(input);
      }

      document.body.appendChild(payuForm);
      payuForm.submit();
    } catch (err) {
      console.error('PayU init error:', err);
      setLoading(false);
      alert('Something went wrong. Please try again or use bank transfer.');
    }
  }

  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="text-saffron font-semibold text-sm uppercase tracking-widest">Support Us</span>
          {/* <h2 className="font-display text-4xl font-bold mt-2 mb-3">
            Make a <span className="gradient-text">Donation</span>
          </h2> */}
          <SubHeading>
            Your Contribution Matters
          </SubHeading>

          <Para children="Your support makes a real difference in the lives of those who need it most." />

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { icon: Shield, label: '80G Tax Exemption' },
              { icon: CheckCircle, label: '12A Registered' },
              { icon: Heart, label: 'FCRA Compliant' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm shadow-sm">
                <Icon size={14} className="text-green-500" />
                <span className="text-gray-600">{label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Main Content - Equal Height Columns */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Donation Form */}
          <AnimatedSection direction="left" className="flex">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-orange-100 flex flex-col w-full">
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-gray-800 mb-6">Choose Amount</h3>

                {/* Preset Amounts */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {PRESET_AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount('');
                        setAmountError('');
                      }}
                      className={`py-3 rounded-xl font-bold text-sm transition-all ${selectedAmount === amt
                        ? 'bg-primary text-white shadow-lg scale-105'
                        : 'bg-orange-50 border border-orange-200 text-gray-700 hover:border-orange-300'
                        }`}
                    >
                      ₹{amt.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-4">
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
                      className="w-full border border-gray-200 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                    />
                  </div>
                  {amountError && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {amountError}
                    </p>
                  )}
                </div>

                {/* Impact Message */}
                {currentImpact && (
                  <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-green-700 text-sm flex items-start gap-2 mb-4">
                    <CheckCircle size={16} className="mt-0.5 shrink-0" />
                    <span>{currentImpact}</span>
                  </div>
                )}

                {/* Donate Button */}
                <button
                  onClick={handleDonate}
                  disabled={loading}
                  className="w-full bg-blue text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Redirecting to PayU...
                    </>
                  ) : (
                    <>
                      <Heart size={18} />
                      Donate {finalAmount ? `₹${finalAmount.toLocaleString('en-IN')}` : 'Now'} via PayU
                    </>
                  )}
                </button>

                {/* Payment Methods */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">🔒 256-bit SSL</span>
                  <span className="w-px h-3 bg-gray-200" />
                  <span>💳 UPI · Cards · Net Banking</span>
                </div>

                {/* How it works */}
                <div className="mt-4 bg-blue-50 rounded-xl p-3 text-xs text-blue-700">
                  <strong>How it works:</strong> Clicking "Donate" will securely redirect you to PayU's
                  payment page. After payment, you'll receive your 80G receipt via email.
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Impact Info - Equal Height */}
          <AnimatedSection direction="right" className="flex">
            <div className="flex flex-col w-full gap-5">
              {/* Impact Table */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100 flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-lg font-bold text-gray-800">Your Donation Impact</h3>
                  <Clock size={16} className="text-primary" />
                </div>
                <p className="text-xs text-gray-500 mb-4">Click any amount to see impact</p>
                <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1 custom-scrollbar">
                  {Object.entries(IMPACTS).map(([amt, impact]) => (
                    <button
                      key={amt}
                      onClick={() => {
                        setSelectedAmount(Number(amt));
                        setCustomAmount('');
                        setAmountError('');
                      }}
                      className={`w-full flex items-start gap-3 text-left rounded-xl p-2 transition-all ${selectedAmount === Number(amt)
                        ? 'bg-white shadow-md ring-1 ring-orange-300'
                        : 'hover:bg-white/70'
                        }`}
                    >
                      <span className={`text-white text-xs font-bold px-1 py-1 rounded-lg shrink-0 ${selectedAmount === Number(amt) ? 'bg-blue' : 'bg-primary'
                        }`}>
                        ₹{Number(amt).toLocaleString('en-IN')}
                      </span>
                      <p className="text-gray-600 text-sm">{impact}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bank Transfer & UPI Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Bank Transfer */}
                <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Building2 size={14} className="text-orange-500" />
                    </div>
                    <h3 className="font-display text-sm font-bold text-gray-800">Bank Transfer</h3>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Account Name</span>
                      <span className="font-semibold text-gray-700">Achariya Welfare Trust</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Account No.</span>
                      <span className="font-semibold text-gray-700">XXXXXXXXXXXX</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">IFSC Code</span>
                      <span className="font-semibold text-gray-700">XXXXXXXXXX</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    📧 Email screenshot to <span className="text-orange-500">info@achariyatrust.org</span>
                  </p>
                </div>

                {/* UPI */}
                <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Smartphone size={14} className="text-orange-500" />
                    </div>
                    <h3 className="font-display text-sm font-bold text-gray-800">UPI Payment</h3>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3 text-center">
                    <p className="text-orange-500 font-mono font-bold text-sm">achariyatrust@upi</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-3 text-center">
                    Use this UPI ID in any app
                  </p>
                </div>
              </div>

              {/* Trust Credentials */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={14} className="text-orange-400" />
                  <p className="font-semibold text-orange-400 text-sm">Donate With Confidence</p>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {[
                    'Registered under Trusts Act',
                    '80G Tax Exemption',
                    '12A Registration',
                    'FCRA Compliant',
                    'PayU PCI-DSS Certified',
                    'Annual Reports Public',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <CheckCircle size={10} className="text-orange-400 shrink-0" />
                      <span className="text-gray-300 text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection className="text-center mt-10">


          <CommonButton href="/activities">
            View Full Donation Page
          </CommonButton>
          <p className="text-gray-400 text-xs mt-3">
            80G & 12A certified · All payments secured · Instant receipt
          </p>
        </AnimatedSection>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4553cf;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}