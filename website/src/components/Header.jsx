import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-serif font-bold text-stone-900">
            Shalom Day Spa
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-stone-700 hover:text-amber-700 transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-stone-700 hover:text-amber-700 transition-colors">
              Services
            </Link>
            <Link to="/booking" className="text-stone-700 hover:text-amber-700 transition-colors">
              Contact
            </Link>
          </nav>

          <Link
            to="/booking"
            className="bg-amber-700 text-white px-6 py-3 rounded-full hover:bg-amber-800 transition-all duration-300 hover:-translate-y-0.5"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
