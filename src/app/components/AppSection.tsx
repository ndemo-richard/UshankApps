export default function AppSection() {
  const apps = [
    {
      name: "HabitHive",
      description: "Track daily habits, stay motivated, and reach your goals with our AI-powered habit tracker.",
      link: "https://play.google.com/store/apps/details?id=com.usanko.habithive",
      cover: "/coming-soon.jpg",  // Updated cover path
    },
    {
      name: "AetherGlow",
      description: "AI-powered screensaver with motivational quotes and minimal design.",
      link: "#",
      cover: "/coming-soon.jpg",  // Updated cover path
    },
    {
      name: "CycleTrack",
      description: "Easily track and manage menstrual cycles tailored for Kenyan women.",
      link: "#",
      cover: "/coming-soon.jpg",  // Updated cover path
    },
    {
      name: "DevLogger",
      description: "A lightweight logging tool for developers to track app performance and logs.",
      link: "#",
      cover: "/coming-soon.jpg",  // Updated cover path
    },
    // Add more apps here as needed
  ];


  return (
    <section id="apps" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Our Apps</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {apps.map((app, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg">
              <img
                src={app.cover}
                alt={app.name}
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">{app.name}</h4>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <a
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
