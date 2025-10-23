export async function getPlaceTypesService(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/places/types`, {method: 'GET'});
  const data = await res.json()
  return data;
}

export async function getZonesService(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/places/zones`, {method: 'GET'});
  const data = await res.json()
  return data;
}

//TODO: Tipado aca
export async function createPlaceService(place){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/places/create`, {method: 'POST'});
  const data = await res.json();
  return data;
}