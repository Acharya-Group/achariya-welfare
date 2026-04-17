// components/home/CTASection.tsx
'use client';
import { useState } from 'react';
import { Mail, Send, CheckCircle, Bell } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-2xl mx-auto px-4">
        <AnimatedSection>
          {/* Solid Color Card */}
          <div className="bg-red-800 rounded-2xl p-8 shadow-xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-4">
              <Bell className="w-3 h-3 text-white" />
              <span className="text-white text-xs font-semibold uppercase tracking-wider">STAY UPDATED</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-white text-xl sm:text-2xl font-bold mb-2">
              Stay up to date with all <span className="text-yellow-300">news & articles.</span>
            </h2>
            
            {/* Description */}
            <p className="text-white/80 text-sm mb-6">
              Get the latest stories and updates delivered to your inbox.
            </p>
            
            {/* Form */}
            <form onSubmit={handleSubscribe} className="max-w-sm mx-auto">
              <div className="relative mb-3">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="w-full pl-9 pr-3 py-2.5 rounded-full border-0 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-orange-700 font-semibold py-2.5 rounded-full transition-all inline-flex items-center justify-center gap-1 text-sm shadow-md hover:shadow-lg"
              >
                {subscribed ? (
                  <>
                    <CheckCircle size={14} />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </form>
            
            {/* Trust Badges */}
            <div className="mt-4 flex items-center justify-center gap-3 text-xs text-white/80">
              <span className="flex items-center gap-1">
                <CheckCircle size={10} /> No spam
              </span>
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span className="flex items-center gap-1">
                <CheckCircle size={10} /> Unsubscribe anytime
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}