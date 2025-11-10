import Image from "next/image";

type FeaturedPlaceSlideProps={
  name: string;
  imageUrl:string
  id: string
}

export function FeaturedPlaceSlide(props:FeaturedPlaceSlideProps){
  const {name, imageUrl, id} = props;
  return(
    <a href={`/place/${id}`}
      className="embla__slide w-96 shrink-0 h-96 bg-cover" 
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h3 className="text-2xl">{name}</h3>
    </a>
  )
}