// components/home/ProgramsSection.tsx
import Link from 'next/link';
import { BookOpen, Heart, Leaf, Zap, Users, Globe, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const programs = [
  {
    icon: BookOpen,
    title: 'Education & Youth',
    desc: 'Schools, coaching centers, vocational training, and skill development for youth and women.',
    gradient: 'from-orange-500 to-red-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    tag: 'Education',
    tagColor: 'bg-orange-100 text-orange-700',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    desc: 'Mobile dispensaries, health camps, yoga, naturopathy, and maternal health support.',
    gradient: 'from-rose-500 to-red-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    tag: 'Health',
    tagColor: 'bg-rose-100 text-rose-700',
  },
  {
    icon: Users,
    title: 'Women Empowerment',
    desc: 'Prevention of atrocities, legal literacy, SHG formation, micro-enterprise development.',
    gradient: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    tag: 'Empowerment',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    icon: Leaf,
    title: 'Environment',
    desc: 'Tree plantation, biodiversity conservation, solar energy, biogas, and eco-awareness.',
    gradient: 'from-green-600 to-emerald-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
    tag: 'Environment',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    icon: Zap,
    title: 'Disaster Relief',
    desc: 'Rapid response, relief distribution, rehabilitation, and community preparedness programs.',
    gradient: 'from-blue-600 to-indigo-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    tag: 'Relief',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Globe,
    title: 'Rural Development',
    desc: 'Agro-processing, livelihood, water purification, IT centers at village to state level.',
    gradient: 'from-purple-600 to-violet-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    tag: 'Rural',
    tagColor: 'bg-purple-100 text-purple-700',
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#fdf6ee] to-orange-50/40 rangoli-bg">
      <div className="max-w-7xl mx-auto px-4">

        <AnimatedSection className="text-center mb-14">
          <span className="text-saffron font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="font-display text-4xl font-bold mt-2 mb-3">
            Our Key <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            A wide spectrum of welfare activities designed to uplift every section of society — from children to elders, from villages to cities.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(({ icon: Icon, title, desc, gradient, bg, border, tag, tagColor }, i) => (
            <AnimatedSection key={title} delay={i * 80} className={`${bg} rounded-3xl p-6 border ${border} shadow-sm card-hover flex flex-col`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                  <Icon size={22} className="text-white" />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${tagColor}`}>{tag}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{desc}</p>
              <Link href="/activities" className="inline-flex items-center gap-1 text-saffron text-sm font-semibold mt-4 hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10">
          <Link href="/activities" className="btn-primary !inline-flex items-center gap-2">
            View All Activities <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}