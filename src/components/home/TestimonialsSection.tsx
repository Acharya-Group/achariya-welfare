'use client';

import { Quote, Star, Heart } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Para from '../common/Para';
import SubHeading from '../common/SubHeading';

const reviews = [
  {
    id: 1,
    name: 'Ramesh Kumar Sharma',
    role: 'Parent',
    text: 'My daughter got a full scholarship through Achariya Trust. Today she is studying engineering at a top college — a dream we never thought possible.',
    rating: 5,
    avatar: 'RK',
    avatarGrad: 'from-orange-500 to-red-500',
    impact: 'Daughter engineer',
  },
  {
    id: 2,
    name: 'Sunita Devi',
    role: 'SHG Member',
    text: 'The trust helped me start my own tailoring business. I now earn ₹8,000 per month and support my family independently — I feel truly empowered.',
    rating: 5,
    avatar: 'SD',
    avatarGrad: 'from-rose-500 to-pink-500',
    impact: 'Self-employed',
  },
  {
    id: 3,
    name: 'Dr. Arvind Mehta',
    role: 'Volunteer Doctor',
    text: 'I have volunteered for 3 years with Achariya Trust. Their rural healthcare reach is truly impressive — the dedication of the on-ground team is remarkable.',
    rating: 5,
    avatar: 'AM',
    avatarGrad: 'from-blue-500 to-cyan-500',
    impact: '3+ years',
  },
  {
    id: 4,
    name: 'Priya Agarwal',
    role: 'Corporate Donor',
    text: 'Transparency and reporting from Achariya Trust is excellent. As a CSR partner, we always know exactly where our contributions go and the impact they create.',
    rating: 5,
    avatar: 'PA',
    avatarGrad: 'from-purple-500 to-indigo-500',
    impact: 'CSR partner',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <AnimatedSection className="text-center mb-12">

          <span className="text-saffron font-semibold text-sm uppercase tracking-widest">Testimonials</span>

          <SubHeading>
            What people Say
          </SubHeading>

          <Para children="Real stories from our community" />

        </AnimatedSection>

        {/* Swiper Slider */}
        <div className="relative px-5">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-btn-next',
              prevEl: '.swiper-btn-prev',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-12"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div className="bg-white rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors p-5 flex flex-col gap-3 h-full">

                  {/* Top Row */}
                  <div className="flex justify-between items-center">
                    <div className="w-7 h-7 bg-orange-50 rounded-lg flex items-center justify-center">
                      <Quote className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    "{review.text}"
                  </p>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">

                    <span className="text-[10px] font-medium bg-orange-50 text-orange-600 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {review.name}
                    </span>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Prev Button */}
          <button className="swiper-btn-prev absolute left-0 top-[42%] -translate-y-1/2 z-10 w-9 h-9 bg-white border border-gray-200 hover:bg-gray-50 rounded-full flex items-center justify-center shadow-sm transition-colors">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Custom Next Button */}
          <button className="swiper-btn-next absolute right-0 top-[42%] -translate-y-1/2 z-10 w-9 h-9 bg-white border border-gray-200 hover:bg-gray-50 rounded-full flex items-center justify-center shadow-sm transition-colors">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination dot color override */}
        <style>{`
          .swiper-pagination-bullet {
            background-color: #fdba74;
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background-color: #f97316 !important;
          }
        `}</style>


      </div>
    </section>
  );
}