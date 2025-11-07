export async function getBusesService(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/buses`, {method: 'GET'});
  const data = await res.json()
  return data;
}