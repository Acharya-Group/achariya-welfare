'use client';
// components/home/StatsSection.tsx
import { useEffect, useRef, useState } from 'react';
import { Award, Users, Globe, MapPin } from 'lucide-react';
import SubHeading from '../common/SubHeading';

const stats = [
  { value: 15, suffix: '+', label: 'Years of Service', sub: 'Serving since 2009', icon: Award },
  { value: 5000, suffix: '+', label: 'Lives Impacted', sub: 'Across rural India', icon: Users },
  { value: 100, suffix: '+', label: 'Programs Run', sub: 'Education to healthcare', icon: Globe },
  { value: 20, suffix: '+', label: 'Districts Reached', sub: 'Hisar and beyond', icon: MapPin },
];

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

function useCounter(target: number, active: boolean, delay = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const timer = setTimeout(() => {
      const start = performance.now();
      const duration = 1800;
      function tick(now: number) {
        const p = Math.min((now - start) / duration, 1);
        setCount(Math.round(easeOutQuart(p) * target));
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timer);
  }, [active, target, delay]);
  return count;
}

function StatCard({
  value, suffix, label, sub, icon: Icon, index, active,
}: {
  value: number; suffix: string; label: string; sub: string;
  icon: React.ElementType; index: number; active: boolean;
}) {
  const count = useCounter(value, active, index * 120);
  const formatted = value >= 1000 ? count.toLocaleString('en-IN') : String(count);

  return (
    <div className="relative bg-white border border-orange-200 rounded-2xl px-5 py-8 text-center overflow-hidden group hover:shadow-md transition-shadow duration-300">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-saffron to-crimson" />

      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
        <Icon size={20} className="text-saffron" strokeWidth={1.5} />
      </div>

      {/* Animated number */}
      <p className="font-display text-3xl sm:text-5xl font-bold text-crimson leading-none tabular-nums">
        {formatted}
        <span className="text-gold">{suffix}</span>
      </p>

      {/* Label */}
      <p className="text-gray-800 font-semibold text-sm sm:text-base mt-3">{label}</p>

      {/* Subheading */}
      <p className="text-gray-400 text-xs sm:text-sm mt-1">{sub}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#fff8f0] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-saffron text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            Our Impact
          </p>
          <SubHeading>
            15 Years of &amp; <span className="gradient-text">Serving India</span>
          </SubHeading>
          <p className="text-gray-500 text-base mt-3 max-w-xl mx-auto leading-relaxed">
            From a single district to a nationwide movement — every number represents a life touched.
          </p>
        </div>

        {/* 4-col responsive grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} active={active} />
          ))}
        </div>

      </div>
    </section>
  );
}