import { Link } from 'react-router-dom'
import { FiUsers, FiMaximize, FiCheck } from 'react-icons/fi'

export default function RoomCard({ room, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-white dark:bg-stone-800/50 overflow-hidden border border-stone-100 
                 dark:border-stone-700/50 hover:border-gold-300 dark:hover:border-gold-600/50
                 transition-all duration-400 hover:shadow-xl hover:shadow-gold-500/10 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-gold-500 text-white font-sans text-xs font-medium px-3 py-1.5 tracking-wider">
          ₹{room.price.toLocaleString('en-IN')} / night
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-stone-800 dark:text-stone-100 mb-2">{room.name}</h3>
        <p className="font-sans text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-4">
          {room.description}
        </p>

        {/* Stats */}
        <div className="flex gap-5 mb-4 pb-4 border-b border-stone-100 dark:border-stone-700">
          <div className="flex items-center gap-1.5 text-stone-500 dark:text-stone-400">
            <FiMaximize size={13} />
            <span className="font-sans text-xs">{room.size}</span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-500 dark:text-stone-400">
            <FiUsers size={13} />
            <span className="font-sans text-xs">Up to {room.guests} guests</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-1.5 mb-5">
          {room.features.slice(0, 4).map(f => (
            <li key={f} className="flex items-center gap-2 font-sans text-xs text-stone-600 dark:text-stone-400">
              <FiCheck size={12} className="text-gold-500 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <Link to="/contact" className="gold-btn w-full text-center block">
          Book Now
        </Link>
      </div>
    </div>
  )
}
