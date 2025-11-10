import PlaceView from "@/components/place/PlaceView";

export interface IPlacePage {
  params: { id: number };
}

export default async function PlacePage({ params }: PlacePageProps) {
  const { id } = params;

  return (
    <section className="flex flex-col items-center justify-center mb-24">
      <PlaceView id={id} />
    </section>
  );
}