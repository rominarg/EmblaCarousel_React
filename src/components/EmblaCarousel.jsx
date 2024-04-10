import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src="https://motos.honda.com.ar/uploads/home/slides/70familia-xr.jpg" alt="imagen1" />
        </div>
        <div className="embla__slide">
            <img src="https://motos.honda.com.ar/uploads/home/slides/73slide-motos-tornado-3-anos-garantia.jpg" alt="imagen2" />
            </div>
        <div className="embla__slide">
            <img src="https://motos.honda.com.ar/uploads/home/slides/56slides-motos-2023-wave.jpg" alt="imagen3" />
        </div>
      </div>
    </div>
  )
}
