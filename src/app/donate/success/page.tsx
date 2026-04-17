// app/donate/success/page.tsx
'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Heart, Home, Download } from 'lucide-react';
import { Suspense } from 'react';

function SuccessContent() {
  const params = useSearchParams();

  const txnid  = params.get('txnid')  ?? params.get('mihpayid') ?? '—';
  const amount = params.get('amount') ?? '—';
  const status = params.get('status') ?? 'success';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#fff3e8] to-[#fff9f0] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-orange-100 p-10 text-center">

        {/* Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={42} className="text-green-500" />
        </div>

        <h1 className="font-display text-3xl font-bold text-gray-800 mb-2">
          Thank You! 🙏
        </h1>
        <p className="font-hindi text-lg text-saffron mb-6">आपका दान सफलतापूर्वक प्राप्त हुआ</p>

        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          Your generous donation has been received successfully.
          It will directly support our community programs across India.
        </p>

        {/* Transaction details */}
        {(txnid !== '—' || amount !== '—') && (
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 mb-8 text-left space-y-2">
            {amount !== '—' && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Amount Donated</span>
                <span className="font-bold text-crimson">₹{Number(amount).toLocaleString('en-IN')}</span>
              </div>
            )}
            {txnid !== '—' && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Transaction ID</span>
                <span className="font-mono text-xs text-gray-700">{txnid}</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Status</span>
              <span className="text-green-600 font-semibold capitalize">{status}</span>
            </div>
          </div>
        )}

        <p className="text-xs text-gray-400 mb-8">
          📧 Your 80G tax exemption receipt will be emailed within 7 working days.
          Keep your transaction ID for reference.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="btn-primary flex items-center justify-center gap-2 py-3"
          >
            <Home size={16} /> Back to Home
          </Link>
          <Link
            href="/donate"
            className="btn-outline flex items-center justify-center gap-2 py-3"
          >
            <Heart size={16} /> Donate Again
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DonateSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-500">Loading...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}