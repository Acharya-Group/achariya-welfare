import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ChevronRight, Facebook, Twitter, Youtube, Instagram, Heart, Shield, Award, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-[#fdf6ee] via-orange-50 to-amber-50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div>
          <div className="mb-4">
            <Image 
              src="/logo.png" 
              alt="Achariya Welfare Trust" 
              width={160} 
              height={55} 
              className="object-contain" 
            />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Working for holistic development of India — education, health, environment, and rural empowerment since 2009.
          </p>
          <p className="font-hindi text-orange-600 text-sm">जन सेवा ही ईश्वर सेवा</p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 rounded-full text-xs text-orange-700">
              <Shield size={12} /> 80G Certified
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 rounded-full text-xs text-orange-700">
              <Award size={12} /> 12A Registered
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display font-bold text-gray-800 mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Activities', path: '/activities' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Donate', path: '/donate' },
              { name: 'Contact', path: '/contact' },
              { name: 'Blog', path: '/blog' },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.path}
                  className="text-gray-500 hover:text-orange-600 transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight size={13} className="text-orange-400 group-hover:translate-x-1 transition-transform" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs & Sections */}
        <div>
          <h3 className="font-display font-bold text-gray-800 mb-4 text-lg">Our Programs</h3>
          <ul className="space-y-2.5 text-sm">
            {[
              'Education & Scholarship',
              'Healthcare Camps',
              'Women Empowerment',
              'Environment & Forestry',
              'Disaster Relief',
              'Rural Development',
              'Skill Training'
            ].map((item) => (
              <li key={item}>
                <Link href="/activities"
                  className="text-gray-500 hover:text-orange-600 transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight size={13} className="text-orange-400 group-hover:translate-x-1 transition-transform" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="font-display font-bold text-gray-800 mb-4 text-lg">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3 text-gray-600">
              <MapPin size={16} className="text-orange-500 mt-0.5 shrink-0" />
              <span>Hisar, Haryana – 125001, India</span>
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <Phone size={16} className="text-orange-500 shrink-0" />
              <a href="tel:+919876543210" className="hover:text-orange-600 transition-colors">+91 98765 43210</a>
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <Mail size={16} className="text-orange-500 shrink-0" />
              <a href="mailto:info@achariyawelfaretrust.org" className="hover:text-orange-600 transition-colors">info@achariyawelfaretrust.org</a>
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <Clock size={16} className="text-orange-500 shrink-0" />
              <span>Mon-Sat: 10:00 AM - 6:00 PM</span>
            </li>
          </ul>
          
          {/* Social Media Links */}
          <div className="flex gap-3 mt-6">
            <a href="#" className="w-9 h-9 rounded-full bg-white border border-orange-200 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all shadow-sm hover:shadow-md">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white border border-orange-200 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all shadow-sm hover:shadow-md">
              <Twitter size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white border border-orange-200 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all shadow-sm hover:shadow-md">
              <Youtube size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white border border-orange-200 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all shadow-sm hover:shadow-md">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Dynamic Copyright */}
      <div className="border-t border-orange-200 bg-orange-100/30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <p >© {currentYear} Achariya Welfare Trust. All rights reserved.</p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-orange-600 transition-colors flex items-center gap-1">
                Privacy Policy
              </Link>
              <span className="w-1 h-1 rounded-full bg-orange-300 hidden sm:block" />
              <Link href="/terms-conditions" className="hover:text-orange-600 transition-colors flex items-center gap-1">
                Terms & Conditions
              </Link>
              <span className="w-1 h-1 rounded-full bg-orange-300 hidden sm:block" />
              <Link href="/refund-policy" className="hover:text-orange-600 transition-colors flex items-center gap-1">
                Refund Policy
              </Link>
              <span className="w-1 h-1 rounded-full bg-orange-300 hidden sm:block" />
              <Link href="/sitemap" className="hover:text-orange-600 transition-colors flex items-center gap-1">
                Sitemap
              </Link>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="text-center sm:text-left text-xs text-gray-400 mt-3 pt-2 border-t border-orange-200/50">
            <p>Achariya Welfare Trust is registered under the Indian Trusts Act, 1882. 
            Donations are eligible for 50% tax exemption under Section 80G of Income Tax Act.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}