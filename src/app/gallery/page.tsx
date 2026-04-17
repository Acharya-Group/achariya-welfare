import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photo gallery of Achariya Welfare Trust activities, events, and community programs across India.',
};

const categories = ['All', 'Education', 'Health', 'Women', 'Environment', 'Events', 'Disaster Relief'];

// Placeholder cards using CSS-generated color blocks
const galleryItems = [
  { cat: 'Education', title: 'School Opening Ceremony', color: 'from-orange-400 to-red-500', emoji: '🏫' },
  { cat: 'Health', title: 'Free Medical Camp', color: 'from-red-400 to-rose-500', emoji: '🏥' },
  { cat: 'Women', title: 'Women Skill Training', color: 'from-pink-400 to-fuchsia-500', emoji: '👩‍🎓' },
  { cat: 'Environment', title: 'Tree Plantation Drive', color: 'from-green-500 to-emerald-600', emoji: '🌳' },
  { cat: 'Events', title: 'Annual Trust Meet', color: 'from-amber-400 to-orange-500', emoji: '🎉' },
  { cat: 'Disaster Relief', title: 'Flood Relief Distribution', color: 'from-blue-500 to-indigo-600', emoji: '🆘' },
  { cat: 'Education', title: 'Coaching Center Launch', color: 'from-purple-400 to-violet-500', emoji: '📚' },
  { cat: 'Health', title: 'Blood Donation Camp', color: 'from-red-500 to-crimson', emoji: '🩸' },
  { cat: 'Women', title: 'Legal Awareness Seminar', color: 'from-teal-400 to-cyan-500', emoji: '⚖️' },
  { cat: 'Environment', title: 'Solar Panel Installation', color: 'from-yellow-400 to-orange-500', emoji: '☀️' },
  { cat: 'Events', title: 'Cultural Program', color: 'from-fuchsia-400 to-pink-500', emoji: '🎭' },
  { cat: 'Education', title: 'Science Exhibition', color: 'from-sky-400 to-blue-500', emoji: '🔬' },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a0500] to-deepred text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 rangoli-bg" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Impact in Pictures</span>
            <h1 className="font-display text-5xl font-bold mt-2 mb-4">
              Photo <span className="text-gold">Gallery</span>
            </h1>
            <p className="text-white/80">Moments that tell the story of change, hope, and community.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8 bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  cat === 'All'
                    ? 'bg-gradient-to-r from-saffron to-crimson text-white shadow-lg'
                    : 'bg-orange-50 text-gray-700 hover:bg-saffron hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map(({ cat, title, color, emoji }, i) => (
            <AnimatedSection key={title} delay={(i % 4) * 80}>
              <div className="group relative rounded-2xl overflow-hidden aspect-square card-hover cursor-pointer">
                <div className={`w-full h-full bg-gradient-to-br ${color} flex flex-col items-center justify-center`}>
                  <span className="text-6xl mb-3 group-hover:scale-110 transition-transform">{emoji}</span>
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">{cat}</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-semibold text-sm">{title}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <div className="bg-orange-50 rounded-3xl p-8 border border-orange-200">
            <p className="text-4xl mb-3">📸</p>
            <h3 className="font-display text-2xl font-bold text-crimson mb-2">More Photos Coming Soon</h3>
            <p className="text-gray-500 text-sm max-w-sm mx-auto">
              We are uploading photos from our recent field activities. Check back soon or follow us on social media.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
