import Image from 'next/image';

export default function AppSection() {
  const apps = [
    {
      name: "KLTC",
      description: "KLTC provides you entertainment anywhere you are provided you have a smartphone and internet connection ready.",
      link: "https://play.google.com/store/apps/details?id=com.KLTC&pcampaignid=web_share",
      cover: "/kltc.webp",
    },
    {
      name: "AetherGlow",
      description: "AetherGlow transforms your device into a minimalistic screensaver that displays inspirational, AI-curated quotes when your screen is idle. Designed for clarity and calm, AetherGlow helps you pause, reflect, and refocus during the day.",
      link: "https://play.google.com/store/apps/details?id=com.ushanko.aetherglow&pcampaignid=web_share",
      cover: "/aetherglow.webp",  
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
              <Image
                src={app.cover}
                alt={app.name}
                className="h-40 w-full object-cover rounded-t-lg"
                width={500}   // You can adjust the width and height to fit your design
                height={200}  // You can adjust the width and height to fit your design
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">{app.name}</h4>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <a
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    className="h-12"
                    width={200}   // Adjust the width to fit your design
                    height={60}   // Adjust the height to fit your design
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
