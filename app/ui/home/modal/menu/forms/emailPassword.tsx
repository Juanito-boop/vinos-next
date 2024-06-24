"use client"

import { useState } from "react";
import { userLogInEmailPassword } from "../funcionesServidor";

async function handleEmailPassword(email: string, password: string) {
  try {
    const { loginEmailPassordData } = await userLogInEmailPassword(email, password)
    return loginEmailPassordData
  } catch (error) {
    console.error("Error during LognEmail:", error);
  }
}

export default function EmailPasswordForm() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleEmailPasswordForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailPasswordData = await handleEmailPassword(email, password);
    console.log(emailPasswordData);
  }

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  return (
    <>
      <form className="flex flex-col items-center" onSubmit={handleEmailPasswordForm}>
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8 my-auto">
          <h1 className="text-xl font-semibold">Inicia Sesion</h1>
          <div className="flex flex-col gap-y-2 my-2">
            <span>
              <label className="my-2" htmlFor="mail">
                Ingresa Tu Correo Electronico
              </label>
              <input type="email" name="mail" value={email} onChange={handleChangeEmail} placeholder="tu@correo.com" className="w-full px-4 border rounded-lg text-gray-700 focus:border-blue-500" />
            </span>
            <span>
              <label className="my-2" htmlFor="pass">
                Ingresa Tu Contraseña
              </label>
              <input type="password" name="pass" value={password} onChange={handleChangePassword} placeholder="***************" className="w-full px-4 border rounded-lg text-gray-700 focus:border-blue-500" />
            </span>
          </div>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
            Enviar
          </button>
        </div>
      </form>
    </>
  )
}