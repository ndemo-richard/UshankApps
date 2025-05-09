export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Ushanko Apps. All rights reserved.</p>
          <a href="mailto:support@ushanko.com" className="hover:underline">Contact Support</a>
        </div>
      </footer>
    );
  }