import logoutAction from "../lib/auth/logoutAction";

//TODO: Tipado aca
export async function loginService(formValues){
  try{
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues),
    });
    const data = await res.json();
    return { ok: res.ok, status: res.status, data };
  }catch(e){
    console.error(e);
    throw e;
  }
}

export async function logoutService(){
  try{
    const res = await fetch("/api/auth/logout", {method:"POST"});
    const data = await res.json();
    await logoutAction();
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}