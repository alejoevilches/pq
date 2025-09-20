import Image from "next/image"

type TravelButtonProps={
  imageUrl:string,
  busTitle:string
}

export default function TravelButton(props: TravelButtonProps){
  const {imageUrl, busTitle} = props;
  return(
    <div>
      <Image src={imageUrl} alt={busTitle} width={300} height={50}/>
      <h3>{busTitle}</h3>
    </div>
  )
}