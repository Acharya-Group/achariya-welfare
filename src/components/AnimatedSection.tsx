'use client';
import { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const dirMap = {
    up: 'translate-y-10 opacity-0',
    left: '-translate-x-10 opacity-0',
    right: 'translate-x-10 opacity-0',
    none: 'opacity-0',
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove(...dirMap[direction].split(' '));
          el.classList.add('translate-y-0', 'translate-x-0', 'opacity-100');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${dirMap[direction]} ${className}`}
    >
      {children}
    </div>
  );
}
