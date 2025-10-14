export default function createUserService(formValues){
  try{
    console.log('values', formValues);
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(formValues)
    }).then(res=>console.log(res));
  } catch(err){
    console.error(err);
  }
}