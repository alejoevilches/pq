import loginAction from "../lib/auth/loginAction";
import logoutAction from "../lib/auth/logoutAction";

//TODO: Tipado aca
export function loginService(formValues){
  try{
    fetch("/api/auth/login", {method: "POST", body: JSON.stringify(formValues)})
      .then((res)=>res.json())
      .then((data)=>loginAction(data));
  }catch(e){
    console.error(e);
  }
}

export async function logoutService(){
  try{
    fetch("api/auth/logout", {method:"POST"})
      .then((res)=>res.json())
      .then(()=>logoutAction())
  } catch (e) {
    console.error(e);
  }
}