export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">About Us</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          <strong>Ushanko Apps</strong> is driven by a passion for innovation and simplicity. We design and build intuitive, reliable, and AI-enhanced mobile apps that solve real-world problems. 
          From habit tracking to personal wellness, our goal is to empower everyday users with smart tools that enhance productivity, organization, and well-being.
        </p>

        <h4 className="text-2xl font-semibold mb-2">Our Mission</h4>
        <p className="text-gray-600 mb-12">
          To create accessible, impactful, and beautifully designed mobile applications that improve everyday life across Africa and beyond.
        </p>

        {/* Image gallery */}
        <div className="relative h-[400px]">
          <img src="/gallery/1.jpg" className="absolute top-0 left-1/4 w-40 h-40 object-cover rounded-lg shadow-lg rotate-2" alt="Gallery 1" />
          <img src="/gallery/2.jpg" className="absolute top-10 left-1/2 w-48 h-48 object-cover rounded-lg shadow-lg -rotate-3" alt="Gallery 2" />
          <img src="/gallery/3.jpg" className="absolute bottom-0 left-1/3 w-36 h-36 object-cover rounded-lg shadow-lg rotate-6" alt="Gallery 3" />
          <img src="/gallery/4.jpg" className="absolute bottom-4 right-1/4 w-44 h-44 object-cover rounded-lg shadow-lg -rotate-2" alt="Gallery 4" />
        </div>
      </div>
    </section>
  );
}
