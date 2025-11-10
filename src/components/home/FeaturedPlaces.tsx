"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useState, useEffect } from "react"
import { FeaturedPlaceSlide } from "./FeaturedPlaceSlide"
import { getPlacesService } from "@/app/services/placeServices"
import { IPlace } from "../place/PlaceView"

export default function FeaturedPlaces() {
  const [featuredPlaces, setFeaturedPlaces] = useState<IPlace[]>()
  const [emblaRef] = useEmblaCarousel()

  useEffect(()=>{
    getPlacesService().then((data)=>setFeaturedPlaces(data))
  }, [])

  if(!featuredPlaces){
    return null
  }
  return(
    <section className="flex flex-col justify-center">
      <h2 className="text-3xl text-center py-4">Lugares destacados</h2>
      <div className="embla overflow-hidden flex justify-center mx-4" ref={emblaRef}>
        <div className="embla__container flex flex-row gap-x-4">
          {
            featuredPlaces.map(p=>{
              return(
                <FeaturedPlaceSlide name={p.nombre} imageUrl="/featured1.webp" id={p.lugarId} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}