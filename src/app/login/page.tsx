import LoginForm from "@/components/login/LoginForm"

export default function LoginPage(){
  return (
    <section className="flex flex-col items-center justify-center w-screen bg-puroquilmes-100">
      <h1 className="text-4xl font-bold my-10">Crea tu cuenta</h1>
      <LoginForm />
    </section>
  )
}