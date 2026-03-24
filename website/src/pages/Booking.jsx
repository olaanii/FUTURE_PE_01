import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="glass rounded-[2rem] p-12">
            <div className="w-20 h-20 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-4xl">✓</span>
            </div>
            <h2 className="text-4xl font-serif mb-4">Thank You!</h2>
            <p className="text-xl text-stone-700 mb-6">
              Your booking request has been received.
            </p>
            <p className="text-stone-600">
              We will contact you shortly to confirm your appointment time. Please keep your phone available.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif tracking-tight mb-4">
            Book Your Session
          </h1>
          <p className="text-lg text-stone-600">
            Limited daily appointments. Reserve your preferred time now.
          </p>
        </div>
      </section>

      {/* Booking Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form Panel */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 outline-none transition-all"
                  />
                  <p className="text-sm text-stone-500 mt-1">
                    Enter your phone number for quick booking confirmation.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 outline-none transition-all"
                  >
                    <option value="">Choose your treatment</option>
                    <option value="massage">Massage Therapy</option>
                    <option value="facial">Facial Treatment</option>
                    <option value="body">Body Treatment</option>
                    <option value="consultation">Not sure - Need consultation</option>
                  </select>
                  <p className="text-sm text-stone-500 mt-1">
                    Need help choosing? We will recommend the best option.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 outline-none transition-all"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="evening">Evening (5PM - 8PM)</option>
                    </select>
                  </div>
                </div>
                <p className="text-sm text-stone-500">
                  Share your preferred time and we will confirm quickly.
                </p>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Tell Us Your Goal
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 outline-none transition-all"
                    placeholder="What would you like to focus on? (stress relief, skin refresh, full-body reset, etc.)"
                  ></textarea>
                  <p className="text-sm text-stone-500 mt-1">
                    Your comfort preferences help us personalize your session.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-700 text-white py-4 rounded-full hover:bg-amber-800 transition-all duration-300 hover:-translate-y-1 shadow-lg font-medium text-lg"
                >
                  Send Booking Request
                </button>

                <p className="text-sm text-center text-stone-500">
                  We usually respond within the same day.
                </p>
              </form>
            </div>

            {/* Trust & Urgency Panel */}
            <div className="md:col-span-2 space-y-6">
              <div className="glass rounded-[2rem] p-8">
                <h3 className="text-2xl font-serif mb-4">Why Book Today</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-700 mt-1">⚡</span>
                    <span className="text-stone-700">
                      Evening slots fill quickly, secure yours before they close.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-700 mt-1">✓</span>
                    <span className="text-stone-700">
                      Experienced therapists tailor each session to your real needs.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-700 mt-1">✓</span>
                    <span className="text-stone-700">
                      Trusted by clients across Adama for consistent service quality.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-700 mt-1">✓</span>
                    <span className="text-stone-700">
                      Your treatment is adjusted in real time for better results.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-[2rem] p-8">
                <h3 className="text-xl font-serif mb-3">Contact Us</h3>
                <div className="space-y-3 text-stone-700">
                  <p>
                    <strong>Phone:</strong> +251 XXX XXXX
                  </p>
                  <p>
                    <strong>WhatsApp:</strong> Available
                  </p>
                  <p>
                    <strong>Location:</strong> Adama, Ethiopia
                  </p>
                  <p className="text-sm text-stone-600 mt-4">
                    Prefer WhatsApp? Message us to reserve your time.
                  </p>
                </div>
              </div>

              <div className="bg-stone-900 text-white rounded-[2rem] p-8">
                <h3 className="text-xl font-serif mb-3">Not Sure Where to Start?</h3>
                <p className="text-stone-300 mb-4">
                  Call for a short consultation. We help you choose the right service.
                </p>
                <button className="w-full bg-white text-stone-900 py-3 rounded-full hover:bg-stone-100 transition-all duration-300 font-medium">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
