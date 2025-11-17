export async function getTripsService(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/trips`, {method: 'GET'});
  const data = await res.json()
  return data;
}

//TODO: Tipado aca
export async function addTripService(trip){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/trips/create`, {
    method: 'POST', 
    body: JSON.stringify({...trip, estado: 1}),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json()
  return data;
}

//TODO: Tipado aca
export async function deleteTripService(trip){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/trips/delete`, {
    method: 'POST', 
    body: JSON.stringify(trip),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}

export async function addPassengerService(passenger){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/trips/addPassenger`, {
    method: 'POST', 
    body: JSON.stringify(passenger),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return { ok: res.ok, status: res.status, data };
}

export async function deleteReservationService(payload:{ pasajeroId?: number; viajeId?: number; usuarioId?: number }){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/trips/deleteReservation`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return { ok: res.ok, status: res.status, data };
}