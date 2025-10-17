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