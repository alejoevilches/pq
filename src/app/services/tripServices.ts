export async function getTripsService(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/trips`, {method: 'GET'});
  const data = await res.json()
  return data;
}