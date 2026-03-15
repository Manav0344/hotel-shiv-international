export default function MenuCard({ item, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 80}
      className="group flex gap-4 bg-white dark:bg-stone-800/40 border border-stone-100 
                 dark:border-stone-700/50 p-4 hover:border-gold-300 dark:hover:border-gold-600/50
                 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10"
    >
      <div className="relative w-24 h-24 shrink-0 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="font-serif text-base text-stone-800 dark:text-stone-100 leading-tight">{item.name}</h4>
          <span className="font-sans text-gold-500 font-medium text-sm shrink-0">₹{item.price}</span>
        </div>
        <p className="font-sans text-xs text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-3">
          {item.description}
        </p>
      </div>
    </div>
  )
}
