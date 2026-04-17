// app/donate/failure/page.tsx
'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { XCircle, Heart, Home, RefreshCw } from 'lucide-react';
import { Suspense } from 'react';

function FailureContent() {
  const params = useSearchParams();

  const txnid  = params.get('txnid')  ?? '—';
  const amount = params.get('amount') ?? '—';
  const error  = params.get('error_Message') ?? params.get('field9') ?? 'Payment was not completed.';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#fff3e8] to-[#fff9f0] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-red-100 p-10 text-center">

        {/* Icon */}
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <XCircle size={42} className="text-red-500" />
        </div>

        <h1 className="font-display text-3xl font-bold text-gray-800 mb-2">
          Payment Failed
        </h1>
        <p className="font-hindi text-lg text-crimson mb-6">भुगतान असफल रहा</p>

        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          Your payment could not be processed. No amount has been deducted.
          Please try again or use an alternate payment method.
        </p>

        {/* Error details */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-4 mb-8 text-left space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Reason</span>
            <span className="text-red-600 text-xs max-w-[200px] text-right">{error}</span>
          </div>
          {txnid !== '—' && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Transaction ID</span>
              <span className="font-mono text-xs text-gray-700">{txnid}</span>
            </div>
          )}
        </div>

        <p className="text-xs text-gray-400 mb-8">
          If money was deducted from your account, it will be refunded within 5–7 business days.
          Contact us at <span className="text-saffron">info@achariyatrust.org</span> with your transaction ID.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/donate"
            className="btn-primary flex items-center justify-center gap-2 py-3"
          >
            <RefreshCw size={16} /> Try Again
          </Link>
          <Link
            href="/"
            className="btn-outline flex items-center justify-center gap-2 py-3"
          >
            <Home size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DonateFailurePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-500">Loading...</div>
      </div>
    }>
      <FailureContent />
    </Suspense>
  );
}