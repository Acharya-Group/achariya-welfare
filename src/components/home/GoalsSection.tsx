// components/home/GoalsSection.tsx
'use client';
import { Target, TrendingUp, Shield, Handshake, Calendar, MapPin, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Para from '../common/Para';
import SubHeading from '../common/SubHeading';

const goals = [
  {
    icon: Target,
    title: '1 Lakh Lives Transformed',
    desc: 'Expanding programs to reach 1,00,000 beneficiaries across Haryana and neighboring states.',
    gradient: 'from-orange-500 to-red-600',
    lightGradient: 'from-orange-50 to-red-50',
    border: 'border-orange-200',
    iconBg: 'bg-orange-100',
    textColor: 'text-orange-600',
    num: '01',
    current: '15,000+',
    target: '1,00,000',
    timeline: 'In Progress',
    progress: 15,
  },
  {
    icon: TrendingUp,
    title: '500 Villages Coverage',
    desc: 'Deploying mobile units and grassroot teams to cover 500+ villages with education, health, and livelihood programs.',
    gradient: 'from-amber-500 to-orange-500',
    lightGradient: 'from-amber-50 to-orange-50',
    border: 'border-amber-200',
    iconBg: 'bg-amber-100',
    textColor: 'text-amber-600',
    num: '02',
    current: '100+',
    target: '500',
    timeline: 'In Progress',
    progress: 20,
  },
  {
    icon: Shield,
    title: 'Zero Child Drop-out',
    desc: 'Working with schools and families to ensure every enrolled child completes at least 10th standard education.',
    gradient: 'from-emerald-600 to-green-600',
    lightGradient: 'from-emerald-50 to-green-50',
    border: 'border-emerald-200',
    iconBg: 'bg-emerald-100',
    textColor: 'text-emerald-600',
    num: '03',
    current: '94%',
    target: '100%',
    timeline: 'In Progress',
    progress: 94,
  },
  {
    icon: Handshake,
    title: '50 Corporate Partners',
    desc: 'Building CSR partnerships with 50 companies to create sustainable, long-term funding for rural development.',
    gradient: 'from-blue-600 to-indigo-600',
    lightGradient: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100',
    textColor: 'text-blue-600',
    num: '04',
    current: '12',
    target: '50',
    timeline: 'In Progress',
    progress: 24,
  },
];

const milestones = [
  { phase: 'Current', title: '15,000+ Lives', achieved: true },
  { phase: 'Next Phase', title: '50,000 Lives', achieved: false },
  { phase: 'Future Goal', title: '1,00,000 Lives', achieved: false },
];

export default function GoalsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#fdf6ee] via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        <AnimatedSection className="text-center mb-14">
          <span className="text-saffron font-semibold text-sm uppercase tracking-widest">Our Goals</span>
          <SubHeading>
            Our Future Goals
          </SubHeading>
          <Para children="Bold, measurable targets that drive every program, partnership, and rupee we raise.
            Join us in making these ambitious goals a reality." />
        </AnimatedSection>
        {/* Progress Bar Section */}
        <AnimatedSection className="mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
              <div>
                <h3 className="font-display text-lg font-bold text-gray-800">Progress Towards Our Vision</h3>
                <p className="text-gray-500 text-sm">Working towards transforming 1,00,000 lives</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-primary">15%</span>
                <span className="text-gray-400 text-sm ml-1">Completed</span>
              </div>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-primary rounded-full transition-all duration-1000"
                style={{ width: '15%' }}
              />
            </div>
            <div className="flex justify-between">
              {milestones.map((milestone, idx) => (
                <div key={milestone.phase} className="text-center flex-1">
                  <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${milestone.achieved ? 'bg-primary' : 'bg-gray-300'}`} />
                  <p className="text-xs font-semibold text-gray-700">{milestone.phase}</p>
                  <p className="text-xs text-gray-400">{milestone.title}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Goals Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {goals.map((goal, i) => (
            <AnimatedSection key={goal.title} delay={i * 80}>
              <div className="relative bg-white h-full rounded-2xl border border-gray-100 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden group">
                {/* Background Number */}
                <span className="absolute -top-2 -right-1 text-7xl font-display font-bold text-gray-100 select-none leading-none">
                  {goal.num}
                </span>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${goal.iconBg} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
                  <goal.icon className={`w-6 h-6 ${goal.textColor}`} />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-gray-800 mb-2">{goal.title}</h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{goal.desc}</p>

                {/* Progress Indicators */}
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-gray-500">Current</span>
                    <span className="text-gray-500">Target</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-800">{goal.current}</span>
                    <span className="text-sm font-bold text-gray-800">{goal.target}</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${goal.gradient} transition-all duration-700`}
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{goal.timeline}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <AnimatedSection>
          <div className="bg-blue rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Help Us Achieve These Goals</h3>
            <p className="text-white/90 max-w-lg mx-auto text-sm mb-6">
              Your support brings us closer to every milestone. Together, we can transform more lives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2">
                <Handshake size={18} />
                Become a Partner
              </button>
              <button className="border-2 border-white/30 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                <Target size={18} />
                View Impact Report
              </button>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}