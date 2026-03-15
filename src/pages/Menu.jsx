import { useState } from 'react'
import MenuCard from '../components/MenuCard'
import { menuItems, menuCategories } from '../data/menu'

const categoryIcons = {
  Breakfast: '🌅',
  Lunch: '☀️',
  Dinner: '🌙',
  Beverages: '☕',
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Breakfast')

  const filtered = menuItems.filter(item => item.category === activeCategory)

  return (
    <>
      {/* Page Hero */}
      <section
        className="relative h-72 md:h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="font-accent italic text-gold-300 text-lg tracking-wider mb-2">Shiv Bhoj Restaurant</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light">Dining Menu</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white dark:bg-charcoal-900">
        <div className="max-w-3xl mx-auto text-center px-4" data-aos="fade-up">
          <p className="section-subtitle mb-3">A Culinary Journey</p>
          <h2 className="section-title mb-4">Food That Tells a Story</h2>
          <p className="font-sans text-stone-500 dark:text-stone-400 leading-relaxed">
            Our restaurant, Shiv Bhoj, celebrates the rich tapestry of Indian cuisine alongside beloved international favourites. Each dish is crafted with fresh, locally sourced ingredients and the finest spices, served in an ambiance that is both elegant and welcoming.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="pb-24 bg-stone-50 dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
            {menuCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-6 py-3 font-sans text-xs uppercase tracking-widest font-medium
                  transition-all duration-300 border
                  ${activeCategory === cat
                    ? 'bg-gold-500 text-white border-gold-500 shadow-lg shadow-gold-500/20'
                    : 'bg-white dark:bg-stone-800/50 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:border-gold-400 hover:text-gold-500'
                  }`}
              >
                <span>{categoryIcons[cat]}</span>
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* Dining Hours */}
          <div className="mt-20 bg-white dark:bg-stone-800/40 border border-stone-100 dark:border-stone-700/50 p-8 max-w-3xl mx-auto" data-aos="fade-up">
            <h3 className="font-serif text-2xl text-stone-800 dark:text-stone-100 text-center mb-6">Dining Hours</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ['Breakfast', '7:00 AM – 10:30 AM'],
                ['Lunch', '12:00 PM – 3:00 PM'],
                ['Dinner', '7:00 PM – 11:00 PM'],
                ['Room Service', '24 Hours'],
              ].map(([meal, hours]) => (
                <div key={meal} className="flex justify-between items-center py-3 border-b border-stone-100 dark:border-stone-700/50 last:border-0">
                  <span className="font-sans text-sm text-stone-500 dark:text-stone-400 uppercase tracking-wider">{meal}</span>
                  <span className="font-serif text-stone-800 dark:text-stone-200">{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
