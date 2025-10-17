import loginAction from "../lib/auth/loginAction";

//TODO: Tipado aca
export default function loginService(formValues){
  try{
    fetch("/api/auth", {method: "POST", body: JSON.stringify(formValues)})
      .then((res)=>res.json())
      .then((data)=>loginAction(data));
  }catch(e){
    console.error(e);
  }
}