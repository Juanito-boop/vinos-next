"use client"

import { useState } from "react";
import { userLogInMagicLinkViaEmail } from "../funcionesServidor";

async function handleMagicLink(email: string) {
  try {
    const { loginMagicLinkData } = await userLogInMagicLinkViaEmail(email)
    console.log("MagicLink data:", loginMagicLinkData);
    return loginMagicLinkData
  } catch (error) {
    console.error("Error during MagicLink:", error);
  }
}

export default function MagicLinkForm() {
  const [email, setEmail] = useState<string>("");

  const handleMagicLinkSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const magicLinkData = await handleMagicLink(email);
    console.log(magicLinkData);
  };

  const magicLinkInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  
  return(
    <>
      <form className="flex items-center justify-center h-full" onSubmit={handleMagicLinkSubmit}>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-xl font-semibold mb-4">Magic Link</h1>
          <p className="text-gray-600 mb-6">
            Ingresa tu correo electrónico para poder enviarte el acceso
          </p>
          <div className="mb-4">
            <input
              type="email"
              placeholder="tu@correo.com"
              value={email}
              onChange={magicLinkInputChangeHandler}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
            Enviar
          </button>
        </div>
      </form>
    </>
  )
}