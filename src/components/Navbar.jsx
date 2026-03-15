import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/rooms', label: 'Rooms' },
  { to: '/menu', label: 'Dining' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
          ${scrolled
            ? 'bg-white/95 dark:bg-charcoal-900/95 backdrop-blur-md shadow-sm border-b border-stone-200/50 dark:border-stone-700/30'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 border-2 border-gold-500 flex items-center justify-center">
                <span className="font-serif text-gold-500 text-lg font-bold leading-none">S</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-serif text-lg leading-none text-stone-800 dark:text-stone-100 group-hover:text-gold-500 transition-colors">
                  Hotel Shiv
                </div>
                <div className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-500 leading-none mt-0.5">
                  International
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'text-gold-500 after:w-full' : ''}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-9 h-9 flex items-center justify-center text-stone-600 dark:text-stone-300 
                           hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
              <Link
                to="/rooms"
                className="hidden sm:inline-flex gold-btn text-xs"
              >
                Book Now
              </Link>
              <button
                className="md:hidden w-9 h-9 flex items-center justify-center text-stone-700 dark:text-stone-300"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white dark:bg-charcoal-900 flex flex-col justify-center items-center
          transition-all duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `font-serif text-3xl text-stone-800 dark:text-stone-100 hover:text-gold-500 
                 dark:hover:text-gold-400 transition-colors ${isActive ? 'text-gold-500' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/rooms" onClick={() => setMobileOpen(false)} className="gold-btn mt-4">
            Book Now
          </Link>
        </nav>
      </div>
    </>
  )
}
