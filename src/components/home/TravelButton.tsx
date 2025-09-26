import Image from "next/image"

type TravelButtonProps={
  imageUrl:string,
  busTitle:string
}

export default function TravelButton(props: TravelButtonProps){
  const {imageUrl, busTitle} = props;
  return(
    <div className="flex flex-col bg-puroquilmes-300 rounded-lg overflow-hidden">
      <Image className="h-64 object-cover aspect-3/4" src={imageUrl} alt={busTitle} width={300} height={200}/>
      <h3 className="p-4">{busTitle}</h3>
    </div>
  )
}