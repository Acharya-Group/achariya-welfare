// components/home/MissionVisionSection.tsx
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

const trustedPartners = [
  { name: 'Google', logo: 'https://via.placeholder.com/80x80?text=Google', delay: 0 },
  { name: 'Microsoft', logo: 'https://via.placeholder.com/80x80?text=MS', delay: 0.1 },
  { name: 'UNICEF', logo: 'https://via.placeholder.com/80x80?text=UNICEF', delay: 0.2 },
  { name: 'Tata Trusts', logo: 'https://via.placeholder.com/80x80?text=Tata', delay: 0.3 },
  { name: 'Bill Gates', logo: 'https://via.placeholder.com/80x80?text=BMGF', delay: 0.4 },
  { name: 'Ambedkar', logo: 'https://via.placeholder.com/80x80?text=Ambedkar', delay: 0.5 },
];

const missionVisionCards = [
  {
    icon: '🎯',
    title: 'Our Mission',
    stat: '250K+',
    statLabel: 'Lives Impacted',
    body: 'Achieving holistic development through integrated activities for the masses — spanning education, health, livelihoods, environment, and social welfare across rural and urban India.',
    color: 'crimson',
    gradient: 'from-crimson to-red-600',
  },
  {
    icon: '🌟',
    title: 'Our Vision',
    stat: '2030',
    statLabel: 'Target Year',
    body: 'Developing positive thinking among people through futuristic strategies — creating a self-reliant, educated, and healthy India where every citizen thrives with dignity.',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600',
  },
];

export default function MissionVisionSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-saffron/10 to-crimson/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-400/10 to-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-saffron/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-saffron/3 rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-saffron text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            Who We Are
          </p>
          <h2 className="font-display text-4xl font-bold mt-2 mb-4">
            Our Mission &amp; <span className="gradient-text">Our Vision</span>
          </h2>
          <p className="text-gray-500 text-base mt-3 max-w-xl mx-auto leading-relaxed">
            From a single district to a nationwide movement — every number represents a life touched.
          </p>
        </div>

        {/* About Us & Trusted Partners Row */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          {/* Left Side - About Us */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-saffron/20 to-crimson/20 rounded-2xl -rotate-6" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-saffron/20 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron to-crimson flex items-center justify-center">
                    <span className="text-white text-2xl">🏛️</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold bg-gradient-to-r from-crimson to-saffron bg-clip-text text-transparent">
                    About Us
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Founded with a vision to empower every Indian citizen, we've been working tirelessly since 2011 to create lasting social impact across the nation.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our integrated approach combines grassroots initiatives with strategic partnerships, ensuring sustainable development in education, healthcare, environmental conservation, and economic empowerment.
                </p>

                <a href="/about" className="inline-block px-6 py-2 bg-gradient-to-r from-saffron to-crimson text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all hover:scale-105">
                  Learn More About Us →
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Trusted Images */}
          <AnimatedSection direction="right" className="relative group">
            {/* Animated gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-saffron via-crimson to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500" />

            {/* Main image container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Image with zoom effect */}
              <img
                height={400}
                width={600}
                src="/images/hero-1.jpg"
                alt="Trusted Partner"
                className="w-full h-auto object-cover transform group-hover:scale-110 transition duration-700 ease-out"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg transform translate-x-full group-hover:translate-x-0 transition duration-500">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-lg">⭐</span>
                  <span className="text-sm font-semibold text-gray-800">Trusted</span>
                </div>
              </div>

              {/* Bottom caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <p className="text-white font-semibold text-lg">Making a Difference Together</p>
                <p className="text-white/80 text-sm">Join our mission to transform lives</p>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-white opacity-0 group-hover:opacity-100 transition duration-500" />

         
            </div>
          </AnimatedSection>
        </div>

        {/* Mission & Vision Creative Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {missionVisionCards.map((card, idx) => (
            <AnimatedSection key={card.title} direction={idx === 0 ? 'left' : 'right'}>
              <div className="group relative h-full">
                {/* Animated border gradient */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.gradient} rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500`} />

                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full transform group-hover:-translate-y-2">
                  {/* Top decorative bar */}
                  <div className={`h-2 bg-gradient-to-r ${card.gradient}`} />

                  <div className="p-8">
                    {/* Icon with rotating background */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 to-crimson/20 rounded-2xl blur-xl animate-pulse" />
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center relative transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <span className="text-white text-3xl">{card.icon}</span>
                      </div>
                    </div>

                    {/* Title and Stats */}
                    <div className="mb-4">
                      <h3 className={`font-display text-3xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent mb-2`}>
                        {card.title}
                      </h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-gray-800">{card.stat}</span>
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{card.statLabel}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">{card.body}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action Banner */}
        <AnimatedSection className="mt-12 text-center">
          <div className="bg-gradient-to-r from-crimson/5 via-saffron/5 to-amber-500/5 rounded-2xl p-4 border border-saffron/20 backdrop-blur-sm">
            <p className="text-gray-600 text-base">
              Join us in our journey to transform India — Be the change you wish to see
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}