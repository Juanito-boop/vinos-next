import { useState } from "react";
import { userSignUp } from "../funcionesServidor";

async function handleSignUp(email: string, password: string) {
  try {
    const { signUpData } = await userSignUp(email, password)
    return signUpData
  } catch (error) {
    console.error("Error during SignUp:", error);
  }
}

export default function SignUpForm() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSignUpForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const signUpData = await handleSignUp(email, password);
    console.log(signUpData);
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  return(
    <>
      <form className="row-start-2 px-3 py-2 h-full flex flex-col" onSubmit={handleSignUpForm}>
        <span className="mb-3">
          <label htmlFor="e-mail">Email</label>
          <input
            type="email"
            name="e-mail"
            placeholder="tu@correo.com"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
          />
        </span>
        <span className="mb-3">
          <label htmlFor="pass">Contraseña</label>
          <input
            type="password"
            name="pass"
            placeholder="***************"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
          />
        </span>
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
          Enviar
        </button>
      </form>
    </>
  )
}