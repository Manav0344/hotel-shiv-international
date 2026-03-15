const images = [
  { src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop', alt: 'Hotel Exterior', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&auto=format&fit=crop', alt: 'Hotel Pool' },
  { src: 'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=400&auto=format&fit=crop', alt: 'Hotel Lobby' },
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&auto=format&fit=crop', alt: 'Room Interior' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&auto=format&fit=crop', alt: 'Restaurant' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&auto=format&fit=crop', alt: 'Deluxe Room' },
]

export default function Gallery() {
  return (
    <section className="py-24 bg-stone-100 dark:bg-charcoal-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="section-subtitle mb-3">A Visual Journey</p>
          <h2 className="section-title">Our Gallery</h2>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group ${img.span || ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-4">
                <span className="font-sans text-xs uppercase tracking-widest text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
