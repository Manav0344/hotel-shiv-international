import RoomCard from '../components/RoomCard'
import { rooms } from '../data/rooms'

export default function Rooms() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative h-72 md:h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1600&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="font-accent italic text-gold-300 text-lg tracking-wider mb-2">Rest & Rejuvenate</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light">Our Rooms</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white dark:bg-charcoal-900">
        <div className="max-w-3xl mx-auto text-center px-4" data-aos="fade-up">
          <p className="section-subtitle mb-3">Tailored for Every Guest</p>
          <h2 className="section-title mb-4">Choose Your Perfect Stay</h2>
          <p className="font-sans text-stone-500 dark:text-stone-400 leading-relaxed">
            From intimate Deluxe Rooms to our lavish Royal Suite, every accommodation at Hotel Shiv International is designed with meticulous attention to detail, premium furnishings, and the comforts that make a stay truly memorable.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-12 pb-24 bg-stone-50 dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 bg-white dark:bg-charcoal-900 border-t border-stone-100 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Check-In', detail: '12:00 Noon', sub: 'Early check-in subject to availability' },
              { title: 'Check-Out', detail: '11:00 AM', sub: 'Late check-out on request' },
              { title: 'Cancellation', detail: '24 Hours', sub: 'Free cancellation up to 24 hrs prior' },
            ].map(({ title, detail, sub }) => (
              <div key={title} data-aos="fade-up" className="p-6 border border-stone-100 dark:border-stone-700/50">
                <div className="font-sans text-xs uppercase tracking-widest text-stone-400 mb-2">{title}</div>
                <div className="font-serif text-2xl text-gold-500 mb-1">{detail}</div>
                <div className="font-sans text-xs text-stone-500 dark:text-stone-400">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
