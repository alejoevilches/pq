"use client"

import useEmblaCarousel from "embla-carousel-react"
import { FeaturedPlaceSlide } from "./FeaturedPlaceSlide"

export default function FeaturedPlaces() {
  const [emblaRef] = useEmblaCarousel()
  return(
    <section className="flex flex-col justify-center">
      <h2 className="text-3xl text-center py-4">Lugares destacados</h2>
      <div className="embla overflow-hidden flex justify-center mx-4" ref={emblaRef}>
        <div className="embla__container flex flex-row gap-x-4">
          <FeaturedPlaceSlide name="La Casa de Manu" imageUrl="/featured1.webp" />
          <FeaturedPlaceSlide name="La Casa de Manu" imageUrl="/featured2.webp" />
          <FeaturedPlaceSlide name="La Casa de Manu" imageUrl="/featured3.webp" />
          <FeaturedPlaceSlide name="La Casa de Manu" imageUrl="/featured4.webp" />
          <FeaturedPlaceSlide name="La Casa de Manu" imageUrl="/featured1.webp" />
          <FeaturedPlaceSlide name="La Casa de Manu" imageUrl="/featured4.webp" />
          <FeaturedPlaceSlide name="La Casa de Manu" imageUrl="/featured3.webp" />
          <FeaturedPlaceSlide name="La Casa de Manu" imageUrl="/featured2.webp" />
          <FeaturedPlaceSlide name="La Casa de Manu" imageUrl="/featured4.webp" />
        </div>
      </div>
    </section>
  )
}