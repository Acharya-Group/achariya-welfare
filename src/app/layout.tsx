import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Achariya Welfare Trust | आचार्य वेलफेयर ट्रस्ट | Hisar, Haryana',
    template: '%s | Achariya Welfare Trust',
  },
  description:
    'Achariya Welfare Trust — a registered NGO in Hisar, Haryana, dedicated to education, health, women empowerment, rural development, disaster relief, and holistic community welfare across India.',
  keywords: [
    'Achariya Welfare Trust',
    'NGO Hisar',
    'NGO Haryana',
    'welfare trust India',
    'education NGO',
    'women empowerment',
    'rural development',
    'आचार्य वेलफेयर ट्रस्ट',
  ],
  authors: [{ name: 'Achariya Welfare Trust' }],
  creator: 'Achariya Welfare Trust',

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://achariyawelfaretrust.org',
    siteName: 'Achariya Welfare Trust',
    title: 'Achariya Welfare Trust | Empowering Communities Since Day One',
    description:
      'Join us in creating a better India through education, health, and sustainable development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Achariya Welfare Trust',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Achariya Welfare Trust',
    description: 'Holistic development for the masses — Hisar, Haryana.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },

  // ✅ Next.js 14+ recommended way (instead of viewport field)
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-body bg-cream text-gray-900 overflow-x-hidden">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}