import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiMail, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-charcoal-900 text-stone-300">
      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border-2 border-gold-500 flex items-center justify-center">
                <span className="font-serif text-gold-500 text-lg font-bold">S</span>
              </div>
              <div>
                <div className="font-serif text-lg text-white leading-none">Hotel Shiv</div>
                <div className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-400 leading-none mt-0.5">International</div>
              </div>
            </div>
            <p className="font-sans text-sm leading-relaxed text-stone-400 mb-6">
              Experience timeless hospitality in the heart of Ahmedabad. Where every stay becomes a cherished memory.
            </p>
            <div className="flex gap-4">
              {[FiInstagram, FiFacebook, FiTwitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 border border-stone-700 hover:border-gold-500 flex items-center justify-center
                            text-stone-400 hover:text-gold-400 transition-all duration-300">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[['/', 'Home'], ['/about', 'About Us'], ['/rooms', 'Our Rooms'], ['/menu', 'Restaurant'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="font-sans text-sm text-stone-400 hover:text-gold-400 transition-colors flex items-center gap-2">
                    <span className="text-gold-600">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-white text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <FiMapPin className="text-gold-500 mt-0.5 shrink-0" size={15} />
                <span className="font-sans text-sm text-stone-400 leading-relaxed">
                  Near Sardar Patel Stadium, Navrangpura, Ahmedabad – 380009, Gujarat, India
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <FiPhone className="text-gold-500 shrink-0" size={15} />
                <a href="tel:+917926423456" className="font-sans text-sm text-stone-400 hover:text-gold-400 transition-colors">
                  +91 79 2642 3456
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <FiMail className="text-gold-500 shrink-0" size={15} />
                <a href="mailto:reservations@hotelshiv.com" className="font-sans text-sm text-stone-400 hover:text-gold-400 transition-colors">
                  reservations@hotelshiv.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-white text-lg mb-5">Hours</h4>
            <ul className="space-y-3">
              {[
                ['Reception', '24 / 7'],
                ['Restaurant', '7:00 AM – 11:00 PM'],
                ['Room Service', '24 / 7'],
                ['Check-In', '12:00 Noon'],
                ['Check-Out', '11:00 AM'],
              ].map(([label, time]) => (
                <li key={label} className="flex justify-between font-sans text-sm">
                  <span className="text-stone-500">{label}</span>
                  <span className="text-stone-300">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-sans text-xs text-stone-500">
            © {new Date().getFullYear()} Hotel Shiv International, Ahmedabad. All rights reserved.
          </p>
          <p className="font-sans text-xs text-stone-600">
            Crafted with ♥ for exceptional hospitality
          </p>
        </div>
      </div>
    </footer>
  )
}
