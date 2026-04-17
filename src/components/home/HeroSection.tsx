'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, Heart, ChevronDown } from 'lucide-react';
import Navbar from '../Navbar';

const slides = [
    {
        image: "/hero/feeding.jpg",
        title: "Feeding the Hungry",
        description: "Daily meal distribution",
        bgColor: "from-amber-800/90 to-orange-900/90"
    },
    {
        image: "/hero/education.jpg",
        title: "Educating Children",
        description: "Building bright futures",
        bgColor: "from-emerald-800/90 to-teal-900/90"
    },
    {
        image: "/hero/healthcare.jpg",
        title: "Healthcare for All",
        description: "Free medical camps",
        bgColor: "from-rose-800/90 to-red-900/90"
    },
    {
        image: "/hero/women.jpg",
        title: "Women Empowerment",
        description: "Self-reliance programs",
        bgColor: "from-purple-800/90 to-indigo-900/90"
    }
];

// Background slider images
const bgSlides = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentBgSlide, setCurrentBgSlide] = useState(0);

    // Autoplay for right side slideshow
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    // Autoplay for background slider
    useEffect(() => {
        const bgTimer = setInterval(() => {
            setCurrentBgSlide((prev) => (prev + 1) % bgSlides.length);
        }, 5000);
        return () => clearInterval(bgTimer);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-[#fefaf5] via-[#fff7ed] to-[#fef3e8]">

            {/* Background Image Slider */}
            <div className="absolute inset-0 z-0">
                {bgSlides.map((bg, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBgSlide === idx ? 'opacity-70' : 'opacity-0'
                            }`}
                        style={{
                            backgroundImage: `url(${bg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                ))}
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Simple Decorative Background */}
            <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-100/20 to-orange-100/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-rose-100/15 to-red-100/15 rounded-full blur-3xl" />

                {/* Simple dot pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #D4A017 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}
                />
            </div>

            {/* Navbar */}
            <div className="relative z-30 flex-shrink-0">
                <Navbar />
            </div>

            {/* Main Hero Content - Centered Vertically */}
            <div className="relative z-10 flex-1 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Column - Content */}
                        <div className="space-y-6">
                            {/* Heading */}
                            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight">
                                <span className="text-white">We Serve</span>
                                <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
                                    With Compassion
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-white text-base leading-relaxed max-w-lg">
                                <strong className="text-amber-500">Achariya Welfare Trust</strong> provides food, education, healthcare, and hope to underserved communities across Haryana. Join us in ending hunger and building a brighter India.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link
                                    href="/donate"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Heart size={18} />
                                    Donate Now
                                </Link>
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-700 rounded-full font-semibold border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all duration-300"
                                >
                                    Learn More
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Animated Image Slideshow */}
                        <div className="relative hidden lg:block">
                            {/* Main Image Card */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <div className={`relative h-[300px] lg:h-[350px] w-full bg-gradient-to-br ${slides[currentSlide].bgColor} transition-all duration-700`}>
                                    {/* Image placeholder - replace with actual images */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                                        <div className="text-6xl mb-4 animate-bounce">
                                            {currentSlide === 0 && "🍲"}
                                            {currentSlide === 1 && "📚"}
                                            {currentSlide === 2 && "🏥"}
                                            {currentSlide === 3 && "👩"}
                                        </div>
                                        <h3 className="text-white text-2xl font-bold mb-2">{slides[currentSlide].title}</h3>
                                        <p className="text-white/80">{slides[currentSlide].description}</p>
                                    </div>

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                    {/* Slide indicators */}
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                        {slides.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentSlide(idx)}
                                                className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx
                                                        ? 'w-8 bg-white'
                                                        : 'w-1.5 bg-white/50 hover:bg-white/80'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating stats card */}
                            <div className="absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-amber-100">
                                <div className="flex items-center gap-3">
                                    <div className="text-2xl">⭐</div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-800">4.9 Rating</div>
                                        <div className="text-xs text-gray-500">Trusted by 5000+ donors</div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-5 -right-5 border  border-amber-100">
                                <Image height={50}
                                width={100}
                                    src="/logo.png"
                                    alt="Achariya Annapurna Logo"
                                    className="object-contain relative z-10"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Banner - Stays at bottom */}
            <div className="relative z-10 flex-shrink-0 border-t border-amber-100 bg-white/80 backdrop-blur-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center gap-4">
                        <p className="text-base text-center font-semibold text-black/80">
                            <span className="text-amber-700">Achariya Welfare Trust</span> — Serving since 2010
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.5s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </section>
    );
}