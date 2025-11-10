import TravelButton from "./TravelButton";

export default function Travels(){
  return(
    <section className="flex flex-col items-center mb-10">
      <h2 className="text-3xl text-center py-4">Elegí tu bus turistico</h2>
      <div className="flex flex-row gap-10">
        <a href="/trips/paseo-gastronomico">
          <TravelButton busTitle="Paseo Gastronomico" imageUrl="/bus1.jpg"/>
        </a>
        <a href="/trips/paseo-cultural">
          <TravelButton busTitle="Paseo Cultural" imageUrl="/bus1.jpg"/>
        </a>
      </div>
    </section>
  )
}