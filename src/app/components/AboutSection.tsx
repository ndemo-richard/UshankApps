'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-6">
          Empowering Africa Through Smart Mobile Innovation
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
          <strong>Ushanko Apps</strong> is a Nairobi-based tech startup building AI-enhanced, user-first mobile applications designed to solve everyday challenges. 
          Our mission is simple: blend innovation with simplicity to create reliable tools for productivity, wellness, and personal growth.
        </p>

        <h4 className="text-2xl font-semibold text-indigo-600 mb-2">Our Vision</h4>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          To become a leading force in Africa’s digital transformation by creating accessible, data-driven, and delightful mobile experiences for everyone.
        </p>

        {/* Modern Image Gallery with Next.js Image optimization */}
        <div className="relative h-[400px]">
          <Image
            src="/gallery/1.jpg"
            alt="Team brainstorming"
            width={160}
            height={160}
            className="absolute top-0 left-1/4 object-cover rounded-xl shadow-xl rotate-2"
          />
          <Image
            src="/gallery/2.jpg"
            alt="App wireframes"
            width={192}
            height={192}
            className="absolute top-10 left-1/2 object-cover rounded-xl shadow-xl -rotate-3"
          />
          <Image
            src="/gallery/3.jpg"
            alt="Developer workspace"
            width={144}
            height={144}
            className="absolute bottom-0 left-1/3 object-cover rounded-xl shadow-xl rotate-6"
          />
          <Image
            src="/gallery/4.jpg"
            alt="Mobile UI design"
            width={176}
            height={176}
            className="absolute bottom-4 right-1/4 object-cover rounded-xl shadow-xl -rotate-2"
          />
        </div>
      </div>
    </section>
  );
}
