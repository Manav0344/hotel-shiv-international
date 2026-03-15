import { FiWifi, FiTv, FiCoffee } from 'react-icons/fi'
import { MdOutlinePool, MdOutlineLocalParking, MdOutlineAcUnit, MdOutlineRestaurant, MdOutlineElevator } from 'react-icons/md'
import { BsShieldCheck } from 'react-icons/bs'
import { TbGymnastics } from 'react-icons/tb'

const milestones = [
  { year: '1998', title: 'Founded', desc: 'Hotel Shiv International opened its doors with 30 rooms and a vision to redefine hospitality in Ahmedabad.' },
  { year: '2005', title: 'Expansion', desc: 'Extended to 80 rooms and launched our signature restaurant, Shiv Bhoj, celebrating Gujarat\'s culinary heritage.' },
  { year: '2012', title: 'Renovation', desc: 'A comprehensive refurbishment brought modern luxury while preserving our warm, heritage character.' },
  { year: '2019', title: 'Awards', desc: 'Recognised as Ahmedabad\'s Best Business Hotel for the third consecutive year by India Travel Awards.' },
  { year: '2024', title: 'Today', desc: 'Welcoming guests from across the world with 120 rooms, expanded dining, and a commitment to excellence.' },
]

const facilities = [
  { icon: FiWifi, label: 'Free High-Speed WiFi', desc: '100 Mbps fibre throughout the property' },
  { icon: MdOutlinePool, label: 'Swimming Pool', desc: 'Temperature-controlled rooftop pool' },
  { icon: MdOutlineAcUnit, label: 'Air Conditioned Rooms', desc: 'Individual climate control in every room' },
  { icon: MdOutlineRestaurant, label: 'Multi-Cuisine Restaurant', desc: 'Indian, Continental and Chinese cuisine' },
  { icon: MdOutlineLocalParking, label: 'Free Parking', desc: 'Secure basement and surface parking' },
  { icon: FiCoffee, label: '24/7 Room Service', desc: 'In-room dining round the clock' },
  { icon: BsShieldCheck, label: '24/7 Reception', desc: 'Front desk assistance any time of day' },
  { icon: MdOutlineElevator, label: 'High-Speed Lifts', desc: 'Four passenger elevators servicing all floors' },
]

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative h-72 md:h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="font-accent italic text-gold-300 text-lg tracking-wider mb-2">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light">About Us</h1>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 bg-white dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <p className="section-subtitle mb-4">Who We Are</p>
              <h2 className="section-title mb-6">
                More Than a Hotel —<br />
                <span className="italic text-gold-500">A Home Away from Home</span>
              </h2>
              <p className="font-sans text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                Hotel Shiv International stands as one of Ahmedabad's most cherished hospitality destinations. Ideally situated in Navrangpura — the city's bustling commercial and cultural hub — we offer unparalleled access to business districts, historic landmarks, and vibrant local life.
              </p>
              <p className="font-sans text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                Our philosophy is simple: every guest deserves to feel valued, comfortable, and delighted. From the moment you step into our grand lobby to the instant you reluctantly check out, we pour genuine care into every detail.
              </p>
              <p className="font-sans text-stone-600 dark:text-stone-400 leading-relaxed">
                With 120 elegantly designed rooms, award-winning dining, and personalised service, Hotel Shiv International has earned the trust of discerning travellers for over two decades.
              </p>
            </div>
            <div data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=700&auto=format&fit=crop"
                alt="Hotel Exterior"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-stone-50 dark:bg-charcoal-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14" data-aos="fade-up">
            <p className="section-subtitle mb-3">Our Journey</p>
            <h2 className="section-title">A Rich History</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gold-200 dark:bg-gold-900" />
            {milestones.map((m, i) => (
              <div
                key={m.year}
                data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={i * 100}
                className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="font-serif text-3xl text-gold-500 mb-1">{m.year}</div>
                </div>

                {/* Dot */}
                <div className="relative z-10 shrink-0">
                  <div className="w-4 h-4 rounded-full bg-gold-500 border-4 border-white dark:border-charcoal-800 shadow" />
                </div>

                <div className="flex-1 bg-white dark:bg-stone-800/50 p-6 border border-stone-100 dark:border-stone-700/50">
                  <div className="md:hidden font-serif text-xl text-gold-500 mb-2">{m.year}</div>
                  <h3 className="font-serif text-xl text-stone-800 dark:text-stone-100 mb-2">{m.title}</h3>
                  <p className="font-sans text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-white dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14" data-aos="fade-up">
            <p className="section-subtitle mb-3">What We Offer</p>
            <h2 className="section-title">Hotel Facilities</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="group p-6 border border-stone-100 dark:border-stone-700/50 hover:border-gold-300 
                           dark:hover:border-gold-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-gold-50 dark:bg-gold-900/20 flex items-center justify-center mb-4 
                                group-hover:bg-gold-100 dark:group-hover:bg-gold-900/40 transition-colors">
                  <Icon size={22} className="text-gold-500" />
                </div>
                <h3 className="font-serif text-lg text-stone-800 dark:text-stone-100 mb-2">{label}</h3>
                <p className="font-sans text-xs text-stone-500 dark:text-stone-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {[['25+', 'Years of Service'], ['120', 'Elegant Rooms'], ['50K+', 'Happy Guests'], ['4.8★', 'Average Rating']].map(([val, label]) => (
              <div key={label} data-aos="fade-up">
                <div className="font-serif text-4xl font-bold mb-1">{val}</div>
                <div className="font-sans text-xs uppercase tracking-widest opacity-80">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
