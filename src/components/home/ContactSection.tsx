// components/home/ContactSection.tsx
import { MapPin, Phone, Mail, ArrowRight, Clock, MessageCircle } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Para from '../common/Para';
import SubHeading from '../common/SubHeading';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Achariya Welfare Trust, Hisar, Haryana – 125001, India',
    bg: 'bg-orange-50 border-orange-100',
    iconGrad: 'from-orange-500 to-red-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    bg: 'bg-rose-50 border-rose-100',
    iconGrad: 'from-rose-500 to-pink-500',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@achariyawelfaretrust.org',
    bg: 'bg-amber-50 border-amber-100',
    iconGrad: 'from-amber-500 to-orange-500',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Monday - Saturday: 10:00 AM - 6:00 PM',
    bg: 'bg-emerald-50 border-emerald-100',
    iconGrad: 'from-emerald-500 to-teal-500',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#fdf6ee] via-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4">

        <AnimatedSection className="text-center mb-14">

          <span className="text-saffron font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <SubHeading>
            Contact Us
          </SubHeading>
          <Para children="Have questions, want to volunteer, or partner with us? We'd love to hear from you." />
        </AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side - Contact Info & Map */}
          <AnimatedSection direction="left" className="space-y-5">
            {/* Contact Info Cards */}
            {contactInfo.map(({ icon: Icon, label, value, bg, iconGrad }) => (
              <div key={label} className={`flex items-start gap-4 ${bg} border rounded-2xl p-5 transition-all hover:shadow-md`}>
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${iconGrad} flex items-center justify-center shrink-0`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{value}</p>
                </div>
              </div>
            ))}

            {/* Google Map */}
            <div className="bg-white border border-orange-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.456789012345!2d75.719773!3d29.126995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391233004103a3bd%3A0xfb5ce913cb462f40!2sHisar%2C%20Haryana%20125001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Achariya Welfare Trust Location"
                />
              </div>
              <div className="p-3 bg-orange-50 text-center border-t border-orange-100">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                  <MapPin size={12} className="text-orange-500" />
                  Achariya Welfare Trust, Hisar, Haryana
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Contact Form */}
          <AnimatedSection direction="right">
            <form className="bg-white rounded-2xl p-6 md:p-8 border border-orange-100 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Send us a Message</h3>
              <p className="text-gray-500 text-sm mb-6">We'll get back to you within 24 hours.</p>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1.5">Email *</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 12345 67890"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1.5">Subject *</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1.5">Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Write your message..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2"
                >
                  Send Message <ArrowRight size={16} />
                </button>

                <p className="text-xs text-gray-400 text-center mt-3">
                  We respect your privacy. Your information is safe with us.
                </p>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}