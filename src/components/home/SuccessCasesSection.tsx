"use client"
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const cases = [
  {
    id: 1,
    year: '2023',
    title: 'Scholarship Drive',
    impact: '1,200 students',
    description: 'Full scholarships covering tuition, books, and uniforms for underprivileged students.',
    color: 'orange',
  },
  {
    id: 2,
    year: '2023',
    title: 'Mobile Health Camps',
    impact: '8,000+ patients',
    description: 'Free medical check-ups and medicines in 40+ remote villages.',
    color: 'rose',
  },
  {
    id: 3,
    year: '2024',
    title: 'Women SHG Network',
    impact: '₹45L+ income',
    description: 'Empowering 320 women through self-help groups and micro-loans.',
    color: 'amber',
  },
  {
    id: 4,
    year: '2024',
    title: 'Green Mission',
    impact: '50,000 trees',
    description: 'Planting drive across 60 villages with community participation.',
    color: 'emerald',
  },
];

export default function SuccessCasesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
    <AnimatedSection className="text-center mb-14">
  <span className="text-saffron font-semibold text-sm uppercase tracking-widest">Inspiring Journeys</span>
  <h2 className="font-display text-4xl font-bold mt-2 mb-3">
    Real <span className="gradient-text">Success Stories</span>
  </h2>
  <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
    From dreams to reality — hear from those whose lives have been transformed through our collective efforts.
  </p>
</AnimatedSection>
        {/* Timeline */}
        <div className="space-y-6">
          {cases.map((caseItem, idx) => (
            <div key={idx} className="flex gap-4 group">
              {/* Year Badge */}
              <div className="flex-shrink-0 w-20">
                <div className={`sticky top-4 text-sm font-bold px-3 py-1 rounded-full bg-${caseItem.color}-100 text-${caseItem.color}-700 text-center`}>
                  {caseItem.year}
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{caseItem.title}</h3>
                  <span className={`text-sm font-medium text-${caseItem.color}-600 bg-${caseItem.color}-50 px-2 py-1 rounded`}>
                    {caseItem.impact}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{caseItem.description}</p>
                <Link
                  href="/activities"
                  className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-900 text-sm group"
                >
                  Read story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
          <AnimatedSection className="text-center mt-10">
          <Link href="/activities" className="btn-primary !inline-flex items-center gap-2">
           See all impact stories <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}