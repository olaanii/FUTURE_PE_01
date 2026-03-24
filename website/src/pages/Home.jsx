import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "I am not sure which treatment I need. Can you help?",
      a: "Yes. We begin with a short consultation to understand your stress level, body tension, and wellness goals, then recommend the most suitable treatment plan."
    },
    {
      q: "I have limited time during the week. Is it still worth booking?",
      a: "Absolutely. Even one focused session can reduce built-up tension and help you reset mentally, making your week feel more manageable and productive."
    },
    {
      q: "I worry spa treatments may feel uncomfortable",
      a: "Your comfort is prioritized throughout the session. Pressure, pace, and treatment steps are adjusted to your preference so the experience stays safe and restorative."
    },
    {
      q: "How is Shalom Day Spa different from other options?",
      a: "We focus on personalized care quality, therapist attentiveness, and a calm environment where each treatment is adapted to your current condition rather than repeated as a standard routine."
    },
    {
      q: "How soon should I book if I want an evening slot?",
      a: "Evening appointments fill faster than daytime slots. Booking earlier helps secure your preferred time and avoids last-minute stress."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-6">
                Restore Your Energy in a Calm, Personalized Spa Experience.
              </h1>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Shalom Day Spa in Adama helps busy women and professionals reduce stress, ease body tension, and feel renewed through treatments tailored to their real needs.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/booking"
                  className="bg-amber-700 text-white px-8 py-4 rounded-full hover:bg-amber-800 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  Book Your Session
                </Link>
                <Link
                  to="/booking"
                  className="border-2 border-amber-700 text-amber-700 px-8 py-4 rounded-full hover:bg-amber-700 hover:text-white transition-all duration-300"
                >
                  Call for a Quick Consultation
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="glass rounded-[2rem] p-8 space-y-4">
                <div className="inline-block bg-amber-700/10 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                  Top Rated Spa in Adama
                </div>
                <h3 className="text-2xl font-serif">Book This Week</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-2 text-stone-700">
                    <span className="text-amber-700">✓</span>
                    <span>Evening slots filling quickly</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700">
                    <span className="text-amber-700">✓</span>
                    <span>Same-day confirmation</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700">
                    <span className="text-amber-700">✓</span>
                    <span>New client consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-stone-700 leading-relaxed">
            When your schedule is full, stress quietly builds into fatigue, body pain, and mental overload. Shalom Day Spa gives you a clear reset with personalized massage, facial, and body treatments designed around your condition, comfort, and goals. Instead of generic routines, each visit is adjusted to what your body needs today. Clients trust our calm environment, attentive therapists, and consistent care quality. Reserve your preferred time this week and return to your routine feeling lighter, calmer, and more in control.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Experienced therapists with comfort-first care",
              "Personalized sessions, not one-size-fits-all treatments",
              "Calm, hygienic environment designed for full relaxation",
              "Trusted by repeat clients across Adama",
              "Consistent quality from consultation to follow-up"
            ].map((trust, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm text-stone-700 font-medium">{trust}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview - Bento Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-[2rem] p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-serif mb-4">Massage Therapy</h3>
              <p className="text-stone-600 mb-6">
                Targeted relief for stress-heavy days and tension-filled routines.
              </p>
              <Link to="/services" className="text-amber-700 font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-stone-50 rounded-[2rem] p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-serif mb-4">Facial Treatments</h3>
              <p className="text-stone-600 mb-6">
                Personalized skin care that restores glow, texture, and confidence.
              </p>
              <Link to="/services" className="text-amber-700 font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-stone-50 rounded-[2rem] p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-serif mb-4">Body Treatments</h3>
              <p className="text-stone-600 mb-6">
                Full-body renewal that combines deep relaxation with skin nourishment.
              </p>
              <Link to="/services" className="text-amber-700 font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-8">
            Why Choose Shalom Day Spa
          </h2>
          <p className="text-xl text-center text-stone-700 mb-12">
            Shalom Day Spa helps busy adults in Adama recover from stress and fatigue through personalized, premium wellness treatments that deliver practical relief and lasting calm.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✓</span>
              </div>
              <p className="text-stone-700">
                Every session is tailored to your stress points, skin, and recovery goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✓</span>
              </div>
              <p className="text-stone-700">
                You get both immediate relief and a sustainable self-care routine.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✓</span>
              </div>
              <p className="text-stone-700">
                Our process combines professional attention with a peaceful experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-12">
            Common Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-stone-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-stone-50 transition-colors"
                >
                  <span className="font-serif text-lg text-stone-900">{faq.q}</span>
                  <span className="text-amber-700 text-2xl">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-6 text-stone-700">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
