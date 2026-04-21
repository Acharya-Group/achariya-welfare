// components/home/AchievementsSection.tsx
'use client';
import { CheckCircle, Shield, Award, BadgeCheck, Trophy, Sparkles, Building2, Globe } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Para from '../common/Para';
import SubHeading from '../common/SubHeading';

const achievements = [
  { text: 'Registered under Indian Trusts Act', icon: '📜', lightBg: 'bg-orange-50', textColor: 'text-orange-700', highlight: false },
  { text: '80G & 12A Tax Exemption', icon: '💰', lightBg: 'bg-amber-50', textColor: 'text-amber-700', highlight: true, badge: 'Tax Benefit' },
  { text: 'FCRA Compliant for Foreign Contributions', icon: '🌐', lightBg: 'bg-blue-50', textColor: 'text-blue-700', highlight: false },
  { text: 'Active in 6+ Districts of Haryana', icon: '📍', lightBg: 'bg-emerald-50', textColor: 'text-emerald-700', highlight: false },
  { text: 'Partner with NABARD, KVIC, SIDBI', icon: '🤝', lightBg: 'bg-purple-50', textColor: 'text-purple-700', highlight: true, badge: 'Government Partner' },
  { text: 'ISO Certified Processes', icon: '🏅', lightBg: 'bg-rose-50', textColor: 'text-rose-700', highlight: false },
  { text: '100% Transparency Commitment', icon: '🔍', lightBg: 'bg-cyan-50', textColor: 'text-cyan-700', highlight: false },
  { text: 'CSR Implementation Partner', icon: '🏢', lightBg: 'bg-indigo-50', textColor: 'text-indigo-700', highlight: true, badge: 'Corporate Trusted' },
];

export default function AchievementsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-100/40 via-rose-100/40 to-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-amber-100/40 to-red-100/40 rounded-full blur-3xl" />

        {/* Dot Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}

        <AnimatedSection className="text-center mb-14">
          <span className="text-saffron font-semibold text-sm uppercase tracking-widest">Recognised & Trusted</span>
          <SubHeading>
            Our Achievements
          </SubHeading>
          <Para children="Your support makes a real difference in the lives of those who need it most." />
        </AnimatedSection>
        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {achievements.map((item, i) => (
            <AnimatedSection key={item.text} delay={i * 60}>
              <div className="relative bg-white rounded-xl p-4 border border-orange-100 hover:border-orange-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                {/* Badge */}
                {item.badge && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
                      {item.badge}
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg ${item.lightBg} flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                  </div>
                  <CheckCircle size={16} className="text-primary shrink-0 mt-1" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust Badges Row */}
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'PCI-DSS Certified', icon: Shield, color: 'border-orange-200 bg-orange-50 text-orange-700' },
              { name: 'Data Protected', icon: Shield, color: 'border-emerald-200 bg-emerald-50 text-emerald-700' },
              { name: '100% Transparent', icon: BadgeCheck, color: 'border-amber-200 bg-amber-50 text-amber-700' },
              { name: 'Regular Audits', icon: Award, color: 'border-rose-200 bg-rose-50 text-rose-700' },
              { name: 'FCRA Compliant', icon: Globe, color: 'border-blue-200 bg-blue-50 text-blue-700' },
              { name: 'CSR Partner', icon: Building2, color: 'border-purple-200 bg-purple-50 text-purple-700' },
            ].map((badge, idx) => (
              <div key={badge.name} className={`flex items-center gap-2 px-4 py-2 rounded-full border ${badge.color} shadow-sm`}>
                <badge.icon size={14} className="shrink-0" />
                <span className="text-xs font-medium">{badge.name}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom Trust Message */}
        <AnimatedSection className="mt-12 text-center">
          <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-rose-50 rounded-2xl p-5 border border-orange-100">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <p className="text-primary font-semibold text-sm">Your Trust Matters</p>
            </div>
            <p className="text-gray-600 text-xs max-w-2xl mx-auto">
              We are committed to complete transparency in all our operations. Our financial records,
              annual reports, and impact assessments are available for public review.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}