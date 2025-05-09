'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const testimonials = [
    {
      quote: 'This app changed how I manage my habits. So intuitive!',
      name: 'Judith Black',
      role: 'CEO of Workcation',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      logo: 'https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg',
    },
    {
      quote: 'I love the clean design and seamless user experience.',
      name: 'Marcus Aurelius',
      role: 'Founder, Stoic Tech',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      logo: 'https://tailwindcss.com/plus-assets/img/logos/transistor-logo-indigo-500.svg',
    },
    {
      quote: 'Tracking habits has never been this fun and motivating!',
      name: 'Lila Rose',
      role: 'Product Manager at HabitFlow',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      logo: 'https://tailwindcss.com/plus-assets/img/logos/tuple-logo-indigo-500.svg',
    },
    {
      quote: 'Daily streaks and reminders keep me on track every day.',
      name: 'James Smith',
      role: 'Freelancer',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      logo: 'https://tailwindcss.com/plus-assets/img/logos/statickit-logo-indigo-500.svg',
    },
    {
      quote: 'Simple, effective, and beautifully designed.',
      name: 'Clara Oswald',
      role: 'Teacher',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      logo: 'https://tailwindcss.com/plus-assets/img/logos/mirage-logo-indigo-500.svg',
    },
    {
      quote: 'Best habit tracker I’ve used — hands down.',
      name: 'Leo Messi',
      role: 'Athlete',
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
      logo: 'https://tailwindcss.com/plus-assets/img/logos/laravel-logo-indigo-500.svg',
    },
  ];
  

  return (
    <section id="testimonials" className="relative bg-white py-24 sm:py-32 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Users Say</h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        className={`absolute left-4 top-1/2 z-10 -translate-y-1/2 p-2 rounded-full transition-colors ${
          canScrollLeft ? 'bg-white text-blue-600 hover:bg-gray-100' : 'text-gray-300 cursor-not-allowed'
        }`}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        className={`absolute right-4 top-1/2 z-10 -translate-y-1/2 p-2 rounded-full transition-colors ${
          canScrollRight ? 'bg-white text-blue-600 hover:bg-gray-100' : 'text-gray-300 cursor-not-allowed'
        }`}
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar scroll-smooth"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg ring-1 ring-indigo-100 space-y-4"
          >
            <img src={item.logo} alt="" className="h-8" />
            <blockquote className="text-gray-800 italic">“{item.quote}”</blockquote>
            <figcaption className="flex items-center space-x-4">
              <img src={item.image} alt="" className="h-12 w-12 rounded-full" />
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-600">{item.role}</div>
              </div>
            </figcaption>
          </div>
        ))}
      </div>
    </section>
  );
}
