import { useState } from 'react'
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', message: '' })
    }, 1200)
  }

  return (
    <>
      {/* Page Hero */}
      <section
        className="relative h-72 md:h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="font-accent italic text-gold-300 text-lg tracking-wider mb-2">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 bg-white dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Info */}
            <div data-aos="fade-right">
              <p className="section-subtitle mb-3">Reach Out</p>
              <h2 className="section-title mb-6">We'd Love to Hear from You</h2>
              <p className="font-sans text-stone-600 dark:text-stone-400 leading-relaxed mb-10">
                Whether you have a reservation query, need special arrangements, or simply want to say hello — our team is always happy to assist. Reach us any time of day.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-gold-50 dark:bg-gold-900/20 flex items-center justify-center shrink-0">
                    <FiMapPin className="text-gold-500" size={18} />
                  </div>
                  <div>
                    <div className="font-serif text-stone-800 dark:text-stone-200 mb-1">Address</div>
                    <p className="font-sans text-sm text-stone-500 dark:text-stone-400">
                      Near Sardar Patel Stadium, Navrangpura,<br />
                      Ahmedabad – 380009, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-gold-50 dark:bg-gold-900/20 flex items-center justify-center shrink-0">
                    <FiPhone className="text-gold-500" size={18} />
                  </div>
                  <div>
                    <div className="font-serif text-stone-800 dark:text-stone-200 mb-1">Phone</div>
                    <a href="tel:+917926423456" className="font-sans text-sm text-stone-500 dark:text-stone-400 hover:text-gold-500 transition-colors block">
                      +91 79 2642 3456
                    </a>
                    <a href="tel:+919876543210" className="font-sans text-sm text-stone-500 dark:text-stone-400 hover:text-gold-500 transition-colors block">
                      +91 98765 43210 (Mobile)
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-gold-50 dark:bg-gold-900/20 flex items-center justify-center shrink-0">
                    <FiMail className="text-gold-500" size={18} />
                  </div>
                  <div>
                    <div className="font-serif text-stone-800 dark:text-stone-200 mb-1">Email</div>
                    <a href="mailto:reservations@hotelshiv.com" className="font-sans text-sm text-stone-500 dark:text-stone-400 hover:text-gold-500 transition-colors block">
                      reservations@hotelshiv.com
                    </a>
                    <a href="mailto:info@hotelshiv.com" className="font-sans text-sm text-stone-500 dark:text-stone-400 hover:text-gold-500 transition-colors block">
                      info@hotelshiv.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-gold-50 dark:bg-gold-900/20 flex items-center justify-center shrink-0">
                    <FiClock className="text-gold-500" size={18} />
                  </div>
                  <div>
                    <div className="font-serif text-stone-800 dark:text-stone-200 mb-1">Reception Hours</div>
                    <p className="font-sans text-sm text-stone-500 dark:text-stone-400">Open 24 hours, 7 days a week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div data-aos="fade-left">
              <div className="bg-stone-50 dark:bg-stone-800/40 border border-stone-100 dark:border-stone-700/50 p-8 md:p-10">
                <h3 className="font-serif text-2xl text-stone-800 dark:text-stone-100 mb-6">Send Us a Message</h3>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gold-50 dark:bg-gold-900/20 flex items-center justify-center mx-auto mb-4">
                      <FiSend className="text-gold-500" size={26} />
                    </div>
                    <h4 className="font-serif text-xl text-stone-800 dark:text-stone-100 mb-2">Message Sent!</h4>
                    <p className="font-sans text-sm text-stone-500 dark:text-stone-400 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="outline-gold-btn text-xs">
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-sans text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 block mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 bg-white dark:bg-stone-900/50 border border-stone-200 
                                     dark:border-stone-600 font-sans text-sm text-stone-800 dark:text-stone-200
                                     placeholder-stone-400 focus:outline-none focus:border-gold-400 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-sans text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 block mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 bg-white dark:bg-stone-900/50 border border-stone-200 
                                     dark:border-stone-600 font-sans text-sm text-stone-800 dark:text-stone-200
                                     placeholder-stone-400 focus:outline-none focus:border-gold-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-sans text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-white dark:bg-stone-900/50 border border-stone-200 
                                   dark:border-stone-600 font-sans text-sm text-stone-800 dark:text-stone-200
                                   placeholder-stone-400 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="font-sans text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 block mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 bg-white dark:bg-stone-900/50 border border-stone-200 
                                   dark:border-stone-600 font-sans text-sm text-stone-800 dark:text-stone-200
                                   placeholder-stone-400 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="gold-btn w-full flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {loading ? (
                        <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                      ) : (
                        <FiSend size={14} />
                      )}
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OpenStreetMap Embed */}
      <section className="h-96 bg-stone-200 dark:bg-stone-800 overflow-hidden" data-aos="fade-up">
        <iframe
          title="Hotel Shiv International Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=72.5490%2C23.0100%2C72.5750%2C23.0380&layer=mapnik&marker=23.0255%2C72.5620"
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
          allowFullScreen=""
          loading="lazy"
        />
      </section>
      <div className="bg-stone-100 dark:bg-stone-900 py-2 text-center">
        <a
          href="https://www.openstreetmap.org/?mlat=23.0255&mlon=72.5620#map=15/23.0255/72.5620"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs text-stone-400 hover:text-gold-500 transition-colors"
        >
          View larger map on OpenStreetMap ↗
        </a>
      </div>
    </>
  )
}
