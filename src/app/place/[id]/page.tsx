import PlaceView from "@/components/place/PlaceView";

export interface IPlacePage {
  params: { id: number };
}

export default async function PlacePage({ params }: IPlacePage) {
  const { id } = params;

  return (
    <section className="flex flex-col items-center justify-center">
      <PlaceView id={id} />
    </section>
  );
}