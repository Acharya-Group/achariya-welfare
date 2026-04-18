'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Heart, Sparkles, Home, Info, Calendar, ImageIcon, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/about', icon: Info },
  {
    label: 'Activities',
    href: '/activities',
    icon: Calendar,
    children: [
      { label: 'Education & Youth', href: '/activities#education' },
      { label: 'Health & Wellness', href: '/activities#health' },
      { label: 'Women Empowerment', href: '/activities#women' },
      { label: 'Environment', href: '/activities#environment' },
      { label: 'Disaster Relief', href: '/activities#disaster' },
    ],
  },
  { label: 'Gallery', href: '/gallery', icon: ImageIcon },
  { label: 'Contact', href: '/contact', icon: Mail },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
            ? 'bg-white backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-b border-white/20'
            : 'bg-white backdrop-blur-md'
          }`}
      >
        {/* Animated gradient bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-amber-500 animate-pulse" />

        {/* Top ribbon - animated */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue to-primary text-white text-xs py-2.5 px-4 text-center font-medium tracking-wide">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          <div className="relative flex items-center justify-center gap-2 flex-wrap">
            <Sparkles size={14} className="text-yellow-300 animate-pulse" />
            <span className="font-hindi">आचार्य वेलफेयर ट्रस्ट</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Empowering Communities Across India</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">📞 +91-90340-40247</span>
            <Sparkles size={14} className="text-yellow-300 animate-pulse" />
          </div>
        </div>

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Area */}
            <Link
              href="/"
              className="group flex items-center gap-3 relative"
            >
              <div className="relative w-[140px] h-[50px]  md:w-[150px] md:h-[50px] lg:w-[180px] lg:h-[60px] xl:w-[200px] xl:h-[65px] mb-0">
                <Image
                  src="/images/welfare-logo.webp"
                  alt="Achariya Annapurna Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* <div>
                <p className="text-sm lg:text-base font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight">
                  Achariya Welfare Trust
                </p>
                <p className="text-[10px] lg:text-xs text-amber-600 font-semibold tracking-wide">Reg. No. 14794 (Since 2011)</p>
              </div> */}
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = hoveredLink === link.label;
                const hasChildren = !!link.children;

                return (
                  <li
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => {
                      setActiveDropdown(link.label);
                      setHoveredLink(link.label);
                    }}
                    onMouseLeave={() => {
                      setActiveDropdown(null);
                      setHoveredLink(null);
                    }}
                  >
                    <Link
                      href={link.href}
                      className="relative flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 overflow-hidden group"
                    >
                      {/* Hover background effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-rose-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                      {/* Icon with animation */}
                      {Icon && (
                        <Icon
                          size={16}
                          className={`relative z-10 transition-all duration-300 ${isActive ? 'text-[#7a0303] scale-110' : 'text-gray-500 group-hover:text-amber-600'
                            }`}
                        />
                      )}

                      <span className={`relative z-10 transition-all duration-300 ${isActive ? 'text-[#7a0303]' : 'text-gray-700 group-hover:text-amber-600'
                        }`}>
                        {link.label}
                      </span>

                      {hasChildren && (
                        <ChevronDown
                          size={14}
                          className={`relative z-10 transition-all duration-300 ${activeDropdown === link.label ? 'rotate-180 text-[#7a0303]' : 'text-gray-500 group-hover:text-amber-600'
                            }`}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {hasChildren && activeDropdown === link.label && (
                      <div className='pt-2 absolute top-full left-0 w-64'>
                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-rose-100 overflow-hidden animate-fadeInUp origin-top-left">
                          <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-amber-50/50" />
                          <div className="relative">
                            {link.children?.map((child, idx) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center gap-3 px-5 py-3.5 text-sm text-gray-700 hover:text-[#7a0303] transition-all duration-300 border-b border-rose-50 last:border-none group hover:bg-white/50"
                                style={{ animationDelay: `${idx * 50}ms` }}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:bg-[#7a0303] transition-all duration-300 group-hover:scale-150" />
                                <span className="font-medium">{child.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* CTA Button + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/donate"
                className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-blue to-green text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#7a0303]-200/50 hover:shadow-xl hover:shadow-[#7a0303]-200/50 transition-all duration-300 hover:-translate-y-1 hover:scale-110 group animate-pulse"
              >
                <Heart size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Donate Now</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-blue text-white  transition-all duration-300 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue to-green opacity-0 transition-opacity duration-300" />
                {mobileMenuOpen ? (
                  <X size={22} className="relative z-10" />
                ) : (
                  <Menu size={22} className="relative z-10" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Full width sliding panel */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[calc(100%-2px)] bg-white/95 backdrop-blur-xl border-t border-rose-100 transition-all duration-500 ease-in-out z-40 ${mobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
            }`}
          style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}
        >
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link, idx) => {
              const Icon = link.icon;
              const hasChildren = !!link.children;
              const [isExpanded, setIsExpanded] = useState(false);

              return (
                <div key={link.href} className="animate-slideInRight" style={{ animationDelay: `${idx * 50}ms` }}>
                  {hasChildren ? (
                    <>
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-full flex items-center justify-between py-3.5 px-4 rounded-xl text-gray-800 font-semibold hover:bg-gradient-to-r hover:from-rose-50 hover:to-amber-50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          {Icon && <Icon size={18} className="text-green" />}
                          <span>{link.label}</span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-rose-500' : 'text-gray-400'}`}
                        />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 pl-4 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
                        <div className="flex flex-col gap-1 py-2 border-l-2 border-rose-200 ml-4">
                          {link.children?.map((child, childIdx) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center gap-3 py-2.5 px-4 text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-rose-50"
                              onClick={() => setMobileMenuOpen(false)}
                              style={{ animationDelay: `${childIdx * 30}ms` }}
                            >
                              <span className="w-1 h-1 rounded-full bg-amber-400" />
                              <span className="text-sm">{child.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 py-3.5 px-4 rounded-xl text-gray-800 font-semibold hover:bg-gradient-to-r hover:from-rose-50 hover:to-amber-50 transition-all duration-300 group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {Icon && <Icon size={18} className="text-primary group-hover:scale-110 transition-transform" />}
                      <span>{link.label}</span>
                    </Link>
                  )}
                </div>
              );
            })}

            {/* Mobile Donate Button */}
            <Link
              href="/donate"
              className="flex items-center justify-center gap-2 w-full mt-4 py-3.5 bg-gradient-to-r from-blue to-green text-white rounded-xl font-bold shadow-lg shadow-rose-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Heart size={18} className="animate-pulse" />
              Donate Now
            </Link>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content hiding under fixed header */}
      <div className="h-[calc(80px+34px)] lg:h-[calc(80px+34px)]" />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}