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

export async function getPlacesService(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/places/`, {method: 'GET'});
  const data = await res.json()
  return data;
}

//TODO: Tipado aca
export async function createPlaceService(place){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/places/create`, 
    {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(place)
    });
  const data = await res.json();
  return data;
}

//TODO: Tipado aca
export async function deletePlaceService(place){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/places/delete`,
    {
      method: 'POST',
      body: JSON.stringify(place)
    }
  )
  const data = res.json();
  return data;
}