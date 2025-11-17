import PlaceData from '@/components/place/PlaceData';

export interface IPlacePage {
  params: { id: number };
}

export default async function PlacePage({ params }: IPlacePage) {
  const { id } = params;

  return (
    <section className="flex flex-col items-center justify-center">
      {/* PlaceData is a client component that fetches and renders the place details */}
      <PlaceData params={{ id: String(id) }} />
    </section>
  );
}