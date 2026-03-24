import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif mb-4 text-white">Shalom Day Spa</h3>
            <p className="text-stone-400">
              Personalized wellness treatments in Adama for stress relief and renewal.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-stone-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-stone-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/booking" className="text-stone-400 hover:text-white transition-colors">
                Book Now
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Contact</h4>
            <div className="text-stone-400 space-y-2">
              <p>Adama, Ethiopia</p>
              <p>Phone: +251 XXX XXXX</p>
              <p>WhatsApp Available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center">
          <Link
            to="/booking"
            className="inline-block bg-amber-700 text-white px-8 py-4 rounded-full hover:bg-amber-800 transition-all duration-300 hover:-translate-y-0.5 text-lg font-serif mb-4"
          >
            Ready to Recharge? Book Now
          </Link>
          <p className="text-stone-500 text-sm mt-8">
            © 2024 Shalom Day Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
