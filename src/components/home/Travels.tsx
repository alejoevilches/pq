import TravelButton from "./TravelButton";

export default function Travels(){
  return(
    <section className="flex flex-col items-center mb-10">
      <h2 className="text-3xl text-center py-4">Elegí tu bus turistico</h2>
      <div className="flex flex-row gap-10">
        <TravelButton busTitle="Paseo 1" imageUrl="/bus1.jpg"/>
        <TravelButton busTitle="Paseo 2" imageUrl="/bus2.jpg"/>
      </div>
    </section>
  )
}