import { Link } from 'react-router-dom'
import { FiWifi, FiCoffee, FiStar, FiArrowRight } from 'react-icons/fi'
import { MdOutlinePool, MdOutlineLocalParking } from 'react-icons/md'
import Gallery from '../components/Gallery'
import RoomCard from '../components/RoomCard'
import { rooms } from '../data/rooms'

const reviews = [
  { name: 'Priya Sharma', city: 'Mumbai', rating: 5, text: 'Absolutely stunning hotel. The staff went above and beyond to make our anniversary special. The suite was immaculate and the restaurant food was exceptional.' },
  { name: 'Rahul Mehta', city: 'Delhi', rating: 5, text: 'Best hotel experience in Ahmedabad. The location is central, the rooms are spotless, and the breakfast spread is incredible. Will definitely return.' },
  { name: 'Anita Patel', city: 'Bangalore', rating: 5, text: 'Warm hospitality, beautiful interiors, and great food. Hotel Shiv International truly lives up to its reputation as one of the finest hotels in Ahmedabad.' },
]

const amenities = [
  { icon: FiWifi, label: 'Free WiFi' },
  { icon: MdOutlinePool, label: 'Swimming Pool' },
  { icon: FiCoffee, label: 'Fine Dining' },
  { icon: MdOutlineLocalParking, label: 'Free Parking' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Decorative lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-1/4 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
          <div className="absolute top-1/4 right-0 w-1/4 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
          <div className="absolute bottom-1/4 left-0 w-1/4 h-px bg-gradient-to-r from-transparent to-gold-500/30" />
          <div className="absolute bottom-1/4 right-0 w-1/4 h-px bg-gradient-to-l from-transparent to-gold-500/30" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p
            className="font-accent italic text-gold-400 text-xl tracking-[0.2em] mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Welcome to
          </p>
          <h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            Hotel Shiv<br />
            <span className="italic text-gold-300">International</span>
          </h1>
          <p
            className="font-sans text-sm uppercase tracking-[0.4em] text-stone-300 mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            Ahmedabad · Gujarat · India
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <Link to="/rooms" className="gold-btn">Explore Rooms</Link>
            <Link to="/about" className="outline-gold-btn border-white/40 text-white hover:bg-white/10 hover:text-white">
              Discover More
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="font-sans text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <p className="section-subtitle mb-4">About Our Hotel</p>
              <h2 className="section-title mb-6">
                A Legacy of Warmth<br />
                <span className="italic text-gold-500">& Hospitality</span>
              </h2>
              <p className="font-sans text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                Nestled in the vibrant heart of Ahmedabad, Hotel Shiv International has been a beacon of refined hospitality since 1998. We blend the rich cultural heritage of Gujarat with contemporary comforts to craft an experience that is uniquely ours.
              </p>
              <p className="font-sans text-stone-600 dark:text-stone-400 leading-relaxed mb-8">
                Whether you are here for business or leisure, our dedicated team ensures every moment of your stay is seamless, memorable, and deeply personal.
              </p>
              <Link to="/about" className="gold-btn inline-flex items-center gap-2">
                Our Story <FiArrowRight size={14} />
              </Link>
            </div>
            <div data-aos="fade-left" className="relative">
              <img
                src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=700&auto=format&fit=crop"
                alt="Hotel Lobby"
                className="w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&auto=format&fit=crop"
                  alt="Hotel Pool"
                  className="w-full h-full object-cover border-4 border-white dark:border-charcoal-900"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-gold-500 text-white p-5 hidden md:block">
                <div className="font-serif text-3xl font-bold leading-none">25+</div>
                <div className="font-sans text-xs uppercase tracking-widest mt-1">Years of<br />Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-16 bg-stone-900 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenities.map(({ icon: Icon, label }, i) => (
              <div key={label} data-aos="fade-up" data-aos-delay={i * 100} className="text-center group">
                <div className="w-14 h-14 border border-stone-700 group-hover:border-gold-500 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <Icon size={22} className="text-gold-400" />
                </div>
                <span className="font-sans text-xs uppercase tracking-widest text-stone-300">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ROOMS */}
      <section className="py-24 bg-stone-50 dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14" data-aos="fade-up">
            <p className="section-subtitle mb-3">Comfort & Style</p>
            <h2 className="section-title">Featured Rooms</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {rooms.slice(0, 3).map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} />
            ))}
          </div>
          <div className="text-center" data-aos="fade-up">
            <Link to="/rooms" className="outline-gold-btn">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <Gallery />

      {/* REVIEWS */}
      <section className="py-24 bg-white dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14" data-aos="fade-up">
            <p className="section-subtitle mb-3">What Our Guests Say</p>
            <h2 className="section-title">Guest Reviews</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="bg-stone-50 dark:bg-stone-800/40 p-8 border border-stone-100 dark:border-stone-700/50"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <FiStar key={j} size={14} className="text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <p className="font-sans text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-6 italic">
                  "{r.text}"
                </p>
                <div>
                  <div className="font-serif text-stone-800 dark:text-stone-200">{r.name}</div>
                  <div className="font-sans text-xs text-stone-400 tracking-wider">{r.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1600&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4" data-aos="fade-up">
          <p className="section-subtitle text-gold-300 mb-4">Plan Your Stay</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="font-sans text-stone-300 mb-10 leading-relaxed">
            Reserve your room today and discover why Hotel Shiv International is Ahmedabad's most beloved hotel.
          </p>
          <Link to="/rooms" className="gold-btn text-sm">
            Book Your Stay
          </Link>
        </div>
      </section>
    </>
  )
}
