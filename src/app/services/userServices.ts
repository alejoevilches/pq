import getCookies from "../lib/auth/getCookies";

export function createUserService(formValues){
  try{
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(formValues)
    }).then(res=>res.json())
    .then(data=>console.log(data));
  } catch(err){
    console.error(err);
  }
}

export async function getCurrentUserService(){
  const token=await getCookies("token");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:3000"
  try {
    const res = await fetch(`${baseUrl}/api/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("Error al obtener usuario:", res.status);
      return null;
    }

    const data = await res.json();
    return data;

  } catch (e) {
    console.error("Error en getCurrentUserService:", e);
    return null;
  }
}