// components/home/BlogSection.tsx
'use client';
import { useState } from 'react';
import { Calendar, User, Heart, MessageCircle, Share2, BookOpen, ArrowRight, Clock, Tag, TrendingUp, Sparkles } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const blogs = [
    {
        id: 1,
        title: 'Empowering Rural Girls Through Education',
        excerpt: 'How our scholarship program helped 500+ girls continue their education and break the cycle of poverty in rural Haryana.',
        author: 'Ramesh Kumar',
        date: 'March 15, 2024',
        readTime: '5 min read',
        category: 'Education',
        tags: ['Girl Child', 'Scholarship', 'Empowerment'],
        icon: '🎓',
        color: 'from-orange-500 to-red-500',
        lightBg: 'bg-orange-50',
        textColor: 'text-orange-700',
    },
    {
        id: 2,
        title: 'The Impact of Mobile Health Camps',
        excerpt: 'Bringing healthcare to doorsteps - Our journey of serving 8,000+ patients across 40+ remote villages in the last year.',
        author: 'Dr. Priya Sharma',
        date: 'February 28, 2024',
        readTime: '4 min read',
        category: 'Healthcare',
        tags: ['Health', 'Rural Development', 'Medical Camp'],
        icon: '🏥',
        color: 'from-rose-500 to-pink-500',
        lightBg: 'bg-rose-50',
        textColor: 'text-rose-700',
    },
    {
        id: 3,
        title: 'Women Self-Help Groups: A Success Story',
        excerpt: 'How 320 women transformed their lives through self-help groups, generating ₹45L+ in annual income and gaining financial independence.',
        author: 'Sunita Devi',
        date: 'February 10, 2024',
        readTime: '6 min read',
        category: 'Empowerment',
        tags: ['Women Empowerment', 'SHG', 'Livelihood'],
        icon: '👩‍💼',
        color: 'from-amber-500 to-orange-500',
        lightBg: 'bg-amber-50',
        textColor: 'text-amber-700',
    },
    {
        id: 4,
        title: 'Green Haryana: Our Environmental Initiative',
        excerpt: 'Planting 50,000 trees and creating green jobs - Our commitment to combat climate change and protect the environment.',
        author: 'Mohan Singh',
        date: 'January 25, 2024',
        readTime: '4 min read',
        category: 'Environment',
        tags: ['Environment', 'Sustainability', 'Green India'],
        icon: '🌳',
        color: 'from-emerald-500 to-teal-500',
        lightBg: 'bg-emerald-50',
        textColor: 'text-emerald-700',
    },

];

const categories = ['All', 'Education', 'Healthcare', 'Empowerment', 'Environment', 'Partnership', 'Transparency'];

export default function BlogSection() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredBlogs = activeCategory === 'All'
        ? blogs
        : blogs.filter(blog => blog.category === activeCategory);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
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
                    <span className="text-saffron font-semibold text-sm uppercase tracking-widest">Our Blog</span>
                    <h2 className="font-display text-4xl font-bold mt-2 mb-3">
                        Latest <span className="gradient-text">  Stories & Updates</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                        Insights, impact stories, and updates from our work across communities.

                    </p>
                </AnimatedSection>



                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {(activeCategory === 'All' ? filteredBlogs.slice(1) : filteredBlogs).map((blog, i) => (
                        <AnimatedSection key={blog.id} delay={i * 80}>
                            <div className="bg-white h-full rounded-xl border border-orange-100 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                                {/* Icon and Category */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${blog.lightBg} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                                        {blog.icon}
                                    </div>
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${blog.lightBg} ${blog.textColor}`}>
                                        {blog.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                                    {blog.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {blog.excerpt}
                                </p>

                                {/* Meta Info */}
                                <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} /> {blog.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={12} /> {blog.readTime}
                                    </span>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {blog.tags.map((tag) => (
                                        <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Author & Read More */}
                                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-6 h-6 rounded-full ${blog.lightBg} flex items-center justify-center text-xs font-bold ${blog.textColor}`}>
                                            {blog.author.charAt(0)}
                                        </div>
                                        <span className="text-xs text-gray-500">{blog.author}</span>
                                    </div>
                                    <button className="text-orange-500 text-sm font-medium hover:text-orange-600 transition-colors flex items-center gap-1 group">
                                        Read More
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* View All Button */}
                <AnimatedSection className="text-center">
                    <div className="inline-flex flex-col items-center gap-4">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all group"
                        >
                            <span>View All Articles</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <Heart size={12} className="text-rose-400" />
                            <span>Join 5,000+ readers who follow our impact stories</span>
                        </div>
                    </div>
                </AnimatedSection>


            </div>
        </section>
    );
}