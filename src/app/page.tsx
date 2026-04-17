// app/page.tsx
import type { Metadata } from 'next';
import HeroSection         from '@/components/home/HeroSection';
import StatsSection        from '@/components/home/StatsSection';
import MissionVisionSection from '@/components/home/MissionVisionSection';
import ProgramsSection     from '@/components/home/ProgramsSection';
import SuccessCasesSection from '@/components/home/SuccessCasesSection';
import DonateSection       from '@/components/home/DonateSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GoalsSection        from '@/components/home/GoalsSection';
import AchievementsSection from '@/components/home/AchievementsSection';
import ContactSection      from '@/components/home/ContactSection';
import CTASection          from '@/components/home/CTASection';
import FAQSection from '@/components/home/FAQSection';
import BlogSection from '@/components/home/BlogSection';


export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), 

  title: 'Achariya Welfare Trust | NGO Hisar Haryana | Empowering India',
  description:
    'Achariya Welfare Trust — registered NGO in Hisar, Haryana. Working in education, health, women empowerment, environment, and rural development across India.',
};
export default function HomePage() {
  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <StatsSection />
      <MissionVisionSection />
      <ProgramsSection />
      <SuccessCasesSection />
      <DonateSection />
      <TestimonialsSection />
      <GoalsSection />
      <AchievementsSection />
      <FAQSection/>
      <BlogSection/>
      <ContactSection />
      <CTASection />
    </div>
  );
}