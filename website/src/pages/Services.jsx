import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      name: "Massage Therapy",
      positioning: "Targeted relief for stress-heavy days and tension-filled routines.",
      whatYouGet: "Your session focuses on personal stress points such as neck, shoulders, back, and lower-body tension. Pressure and technique are adjusted in real time to your comfort level. You receive therapist-led guidance, a calm treatment setting, and a personalized approach designed to help you feel immediate physical ease.",
      bestFor: "Ideal for professionals who sit long hours, carry stress in the body, or feel physically tight and mentally overloaded after demanding days.",
      outcomes: [
        "Noticeably reduced muscle tension and body stiffness",
        "Better physical comfort during daily activities",
        "A calmer mind and improved focus after your session"
      ],
      whyChoose: "Our therapists do not follow fixed routines. Each massage is adapted to your stress pattern and comfort preferences, so the treatment feels both therapeutic and deeply restorative in a calm, hygienic environment.",
      objection: "If you are unsure about pressure level, we adjust throughout the session.",
      ctas: [
        "Book your massage this week and feel lighter in one visit.",
        "Reserve a stress-relief session at your preferred time in Adama.",
        "Call now for a quick massage consultation before booking.",
        "Start with one session and decide your next care plan after."
      ]
    },
    {
      name: "Facial Treatments",
      positioning: "Personalized skin care that restores glow, texture, and confidence.",
      whatYouGet: "Each facial starts with skin assessment and treatment matching based on your current skin condition. Sessions may include cleansing, hydration support, texture-focused care, and glow-restoring steps. The approach is gentle, practical, and built for visible improvement without harsh routines.",
      bestFor: "Best for clients managing dullness, dryness, uneven tone, or tired-looking skin and looking for a clear, professional skin-care reset.",
      outcomes: [
        "Fresher and healthier-looking skin tone",
        "Softer texture with improved hydration comfort",
        "More confidence in your day-to-day appearance"
      ],
      whyChoose: "We prioritize accurate skin matching and consistency. Instead of generic product-heavy sessions, treatment steps are selected for your present skin needs and delivered with careful attention by experienced therapists.",
      objection: "Not sure your skin can handle facials? We choose gentle, suitable steps first.",
      ctas: [
        "Reserve your facial consultation and get a plan that fits your skin.",
        "Book your first glow-restoring facial this week.",
        "Call for a quick skin consultation before you schedule.",
        "Start with one session and track visible skin improvement."
      ]
    },
    {
      name: "Body Treatments",
      positioning: "Full-body renewal that combines deep relaxation with skin nourishment.",
      whatYouGet: "Body treatments include exfoliation, nourishment support, and relaxation-focused care that helps reset how your body feels. Sessions are tailored to your comfort and recovery goals, giving you both skin-level benefits and a noticeable drop in physical heaviness.",
      bestFor: "Designed for clients who feel physically drained, disconnected from self-care, or in need of complete body refresh after stressful weeks.",
      outcomes: [
        "Smoother, softer-feeling skin",
        "Lighter body comfort and reduced fatigue sensation",
        "A stronger sense of reset and overall well-being"
      ],
      whyChoose: "Our team combines careful treatment flow, comfort-led personalization, and detail-focused therapist support to create a complete wellness experience instead of a rushed routine service.",
      objection: "Even one body treatment can give a meaningful reset when time is limited.",
      ctas: [
        "Start with one body treatment and experience full-body renewal in Adama.",
        "Book your body care session now and reset this week.",
        "Call us for guidance on the right body treatment to begin with.",
        "Reserve your preferred slot before evening appointments fill."
      ]
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-6">
            Our Services
          </h1>
          <p className="text-xl text-stone-600">
            Personalized treatments designed around your stress, comfort, and wellness goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`grid md:grid-cols-2 gap-12 items-start ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="bg-stone-100 rounded-[2rem] aspect-square"></div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-serif mb-3">{service.name}</h2>
                    <p className="text-lg text-amber-700 font-medium">
                      {service.positioning}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl mb-2">What You Get</h3>
                    <p className="text-stone-700">{service.whatYouGet}</p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl mb-2">Best For</h3>
                    <p className="text-stone-700">{service.bestFor}</p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl mb-3">Outcomes You Can Expect</h3>
                    <ul className="space-y-2">
                      {service.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-700 mt-1">✓</span>
                          <span className="text-stone-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl mb-2">Why Choose Shalom</h3>
                    <p className="text-stone-700">{service.whyChoose}</p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <p className="text-stone-800">{service.objection}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/booking"
                      className="bg-amber-700 text-white px-6 py-3 rounded-full hover:bg-amber-800 transition-all duration-300 hover:-translate-y-1"
                    >
                      Book This Service
                    </Link>
                    <Link
                      to="/booking"
                      className="border-2 border-amber-700 text-amber-700 px-6 py-3 rounded-full hover:bg-amber-700 hover:text-white transition-all duration-300"
                    >
                      Call for Consultation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Strip */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-16">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-serif">
                1
              </div>
              <h3 className="font-serif text-xl mb-3">Choose Service</h3>
              <p className="text-stone-700">
                Select the treatment that fits your needs or call for personalized guidance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-serif">
                2
              </div>
              <h3 className="font-serif text-xl mb-3">Confirm & Prepare</h3>
              <p className="text-stone-700">
                We confirm your appointment and prepare a personalized session plan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-serif">
                3
              </div>
              <h3 className="font-serif text-xl mb-3">Attend & Reset</h3>
              <p className="text-stone-700">
                Experience your tailored treatment and return to your routine feeling renewed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
