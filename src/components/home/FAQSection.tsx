// components/home/FAQSection.tsx
'use client';
import { useState } from 'react';
import { ChevronDown, HelpCircle, Mail, Phone, MapPin, Clock, MessageCircle, Heart, Shield, CheckCircle, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const faqs = [
    {
        id: 1,
        question: 'How can I donate to Achariya Welfare Trust?',
        answer: 'You can donate directly through our website via PayU (UPI, Cards, Net Banking), bank transfer, or UPI ID "achariyatrust@upi". All donations are eligible for 80G tax exemption.',
        category: 'Donations',
    },
    {
        id: 2,
        question: 'Is my donation eligible for tax exemption?',
        answer: 'Yes, Achariya Welfare Trust is registered under 80G & 12A of the Income Tax Act. All donations made to us are eligible for 50% tax exemption. You will receive a 80G receipt within 7 working days.',
        category: 'Donations',
    },
    {
        id: 3,
        question: 'How can I volunteer with Achariya Welfare Trust?',
        answer: 'You can volunteer by filling out the volunteer form on our website or emailing us at volunteer@achariyatrust.org. We welcome doctors, teachers, social workers, and students for various programs.',
        category: 'Volunteering',
    },
    {
        id: 4,
        question: 'Where does Achariya Welfare Trust operate?',
        answer: 'We currently operate in 6+ districts of Haryana including Hisar, Fatehabad, Jind, Bhiwani, Sirsa, and Rohtak. We are expanding to neighboring states gradually.',
        category: 'Operations',
    },
    {
        id: 5,
        question: 'How can my company partner with Achariya Welfare Trust?',
        answer: 'We welcome CSR partnerships. Companies can partner with us for education scholarships, health camps, women empowerment programs, or environmental initiatives. Contact us at csr@achariyatrust.org.',
        category: 'Partnerships',
    },
    {
        id: 6,
        question: 'How is my donation utilized?',
        answer: 'We maintain 100% transparency. 85% of funds go directly to programs, 10% to administration, and 5% to fundraising. Annual reports and audited financials are available on our website.',
        category: 'Transparency',
    },
    {
        id: 7,
        question: 'Can I sponsor a child\'s education?',
        answer: 'Yes! You can sponsor a child\'s complete education for ₹10,000 per year. This covers tuition, books, uniform, and midday meals. You will receive regular progress updates about your sponsored child.',
        category: 'Programs',
    },
    {
        id: 8,
        question: 'How do I get my 80G receipt?',
        answer: 'After successful donation, you will receive an instant receipt via email. For bank transfers, email your transaction screenshot to accounts@achariyatrust.org and you will receive the 80G certificate within 7 days.',
        category: 'Donations',
    },
];

const categories = ['All', 'Donations', 'Volunteering', 'Operations', 'Partnerships', 'Transparency', 'Programs'];

const contactOptions = [
    { icon: Phone, label: 'Call Us', value: '+91 12345 67890', color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50', textColor: 'text-blue-700' },
    { icon: Mail, label: 'Email Us', value: 'info@achariyatrust.org', color: 'from-orange-500 to-red-500', bg: 'bg-orange-50', textColor: 'text-orange-700' },
    { icon: MapPin, label: 'Visit Us', value: 'Hisar, Haryana', color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50', textColor: 'text-emerald-700' },
    { icon: Clock, label: 'Office Hours', value: 'Mon-Sat: 10AM - 6PM', color: 'from-purple-500 to-indigo-500', bg: 'bg-purple-50', textColor: 'text-purple-700' },
];

export default function FAQSection() {
    const [openId, setOpenId] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    const filteredFAQs = activeCategory === 'All'
        ? faqs
        : faqs.filter(faq => faq.category === activeCategory);

    return (
        <section className="py-24 bg-gradient-to-br from-[#fdf6ee] via-orange-50 to-amber-50 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-100/30 via-rose-100/30 to-purple-100/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-amber-100/30 to-red-100/30 rounded-full blur-3xl" />

                {/* Dot Grid */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">


                <AnimatedSection className="text-center mb-14">
                    <span className="text-saffron font-semibold text-sm uppercase tracking-widest">FAQs</span>
                    <h2 className="font-display text-4xl font-bold mt-2 mb-3">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                        Find answers to common questions about donations, volunteering, partnerships, and our work.

                    </p>
                </AnimatedSection>

                {/* Category Filters */}
                <AnimatedSection className="mb-10">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category, idx) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                                    : 'bg-white border border-orange-200 text-gray-600 hover:bg-orange-50'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </AnimatedSection>

                {/* FAQ Grid - Left and Right Columns */}
                <div className="grid lg:grid-cols-2 gap-6 mb-16">
                    {/* Left Column FAQs */}
                    <div className="space-y-4">
                        {filteredFAQs.slice(0, Math.ceil(filteredFAQs.length / 2)).map((faq) => (
                            <AnimatedSection key={faq.id} delay={faq.id * 50}>
                                <div className="bg-white rounded-xl border border-orange-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                                    <button
                                        onClick={() => toggleFAQ(faq.id)}
                                        className="w-full flex items-center justify-between p-5 text-left hover:bg-orange-50/50 transition-colors"
                                    >
                                        <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-orange-500 transition-transform duration-300 flex-shrink-0 ${openId === faq.id ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? 'max-h-48' : 'max-h-0'
                                            }`}
                                    >
                                        <div className="px-5 pb-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-orange-100">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Right Column FAQs */}
                    <div className="space-y-4">
                        {filteredFAQs.slice(Math.ceil(filteredFAQs.length / 2)).map((faq) => (
                            <AnimatedSection key={faq.id} delay={faq.id * 50}>
                                <div className="bg-white rounded-xl border border-orange-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                                    <button
                                        onClick={() => toggleFAQ(faq.id)}
                                        className="w-full flex items-center justify-between p-5 text-left hover:bg-orange-50/50 transition-colors"
                                    >
                                        <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-orange-500 transition-transform duration-300 flex-shrink-0 ${openId === faq.id ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? 'max-h-48' : 'max-h-0'
                                            }`}
                                    >
                                        <div className="px-5 pb-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-orange-100">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* Still Have Questions Section */}
                <AnimatedSection className="mb-12">
                    <div className="relative rounded-2xl p-8 text-center overflow-hidden bg-gradient-to-r from-orange-50 via-amber-50 to-rose-50 border border-orange-100 group">
                        {/* Premium Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-amber-500/5 to-red-500/5" />
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500" />

                        {/* Animated Border */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />

                        {/* Decorative Circles */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-rose-200/30 to-red-200/30 rounded-full blur-3xl" />

                        {/* Floating Icons */}
                        <div className="absolute top-6 left-6 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                            <div className="relative">
                                <div className="absolute inset-0 bg-orange-500 rounded-full blur-md animate-ping opacity-20" />
                                <HelpCircle className="w-8 h-8 text-orange-500 relative" />
                            </div>
                        </div>
                        <div className="absolute bottom-6 right-6 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                            <div className="relative">
                                <div className="absolute inset-0 bg-amber-500 rounded-full blur-md animate-ping opacity-20" />
                                <MessageCircle className="w-8 h-8 text-amber-500 relative" />
                            </div>
                        </div>

                        {/* Sparkle Effects */}
                        <div className="absolute top-1/4 right-8">
                            <div className="relative">
                                <div className="absolute w-1 h-1 bg-white rounded-full animate-ping" />
                                <Sparkles className="w-4 h-4 text-yellow-400" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Animated Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-200 mb-4 group-hover:scale-105 transition-transform duration-300">
                                <div className="relative">
                                    <Heart className="w-4 h-4 text-orange-500" />
                                    <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-30" />
                                </div>
                                <span className="text-orange-700 text-xs font-semibold uppercase tracking-wider">24/7 Support Available</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 bg-clip-text text-transparent mb-3">
                                Still Have Questions?
                            </h3>

                            <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                                Can't find the answer you're looking for? Our friendly team is here to help you.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap justify-center gap-3">
                                <button className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold transition-all shadow-md hover:shadow-xl hover:scale-105 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <MessageCircle size={18} className="relative z-10 group-hover:rotate-12 transition-transform" />
                                    <span className="relative z-10">Contact Support</span>
                                </button>

                                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-orange-200 text-orange-600 rounded-full font-medium transition-all hover:shadow-md hover:scale-105 group">
                                    <Mail size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                                    <span>Email Us</span>
                                </button>
                            </div>




                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}