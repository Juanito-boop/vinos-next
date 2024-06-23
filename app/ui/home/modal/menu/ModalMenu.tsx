"use client";

import { type ModalMenu } from "@/app/lib/modal";
import React, { useEffect, useState } from "react";
import {
  userLogInEmailPassword,
  userLogInMagicLinkViaEmail,
  userSignUp,
} from "./funcionesServidor";

type FormType = "email" | "magicLink" | "sign up";

async function handleSignUp(
  emailOptionSignUp: string,
  passwordOptionSignUp: string
) {
  try {
    const response = await userSignUp(emailOptionSignUp, passwordOptionSignUp);
    const { signUpData } = response;
    return signUpData;
    // Ahora puedes usar signUpData aquí
  } catch (error) {
    // Manejar el error aquí
    console.error("Error during sign up:", error);
  }
}

async function handleUserLogInEmailPassword() {}

export default function ModalMenu({ isModalOpen, setIsModalOpen }: ModalMenu) {
  if (!isModalOpen) return null;
  const [form, setForm] = useState<FormType>("email");

  const renderForm = (newForm: FormType) => {
    setForm(newForm);
  };

  function renderModalHeader(title: string) {
    return (
      <>
        <div className="p-2 pb-0">
          <div className="flex flex-row justify-end p-2">
            <button
              onClick={() => setIsModalOpen(false)}
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="pb-2 pt-0 text-center">
            <h3 className="text-xl font-normal text-black" children={title} />
          </div>
        </div>
      </>
    );
  }

  function renderModalOptions() {
    return (
      <>
        <div className="row-start-1">
          {renderModalHeader("Inicia Sesion")}
          <div className="grid grid-cols-2 gap-3 px-4">
            <button
              className="p-2 text-center text-black border border-black rounded-lg col-start-1"
              onClick={() => renderForm("email")}
            >
              Email
            </button>
            <button
              className="p-2 text-center text-black border border-black rounded-lg col-start-2"
              onClick={() => renderForm("magicLink")}
            >
              Magic Link
            </button>
          </div>
        </div>
      </>
    );
  }

  function renderModalForms(formOption: FormType) {
    const [emailOptionEmail, setEmailOptionEmail] = useState<string>("");
    const [passwordOptionEmail, setPasswordOptionEmail] = useState<string>("");
    const [emailOptionMagicLink, setEmailOptionMagicLink] =
      useState<string>("");
    const [emailOptionSignUp, setEmailOptionSignUp] = useState<string>("");
    const [passwordOptionSignUp, setPasswordOptionSignUp] =
      useState<string>("");

    const signUpData = handleSignUp(emailOptionSignUp, passwordOptionSignUp);
    const {} = userLogInEmailPassword(emailOptionEmail, passwordOptionEmail);
    const {} = userLogInMagicLinkViaEmail(emailOptionMagicLink);
    console.log(signUpData);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmailOptionEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordOptionEmail(e.target.value);
    };

    const handleMagicLinkEmailChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setEmailOptionMagicLink(e.target.value);
    };

    const handleSignUpEmailChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setEmailOptionSignUp(e.target.value);
    };

    const handleSignUpPasswordChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setPasswordOptionSignUp(e.target.value);
    };

    const renderModalForms = (formOption: FormType) => {
      return (
        <>
          {formOption === "email" ? (
            <form className="flex flex-col items-center">
              <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8 my-auto">
                <h1 className="text-xl font-semibold">Inicia Sesion</h1>
                <div className="flex flex-col gap-y-2 my-2">
                  <div>
                    <label className="my-2" htmlFor="mail">
                      Ingresa Tu Correo Electronico
                    </label>
                    <input
                      type="email"
                      name="mail"
                      value={emailOptionEmail}
                      onChange={handleEmailChange}
                      placeholder="tu@correo.com"
                      className="w-full px-4 border rounded-lg text-gray-700 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="my-2" htmlFor="pass">
                      Ingresa Tu Contraseña
                    </label>
                    <input
                      type="password"
                      name="pass"
                      value={passwordOptionEmail}
                      onChange={handlePasswordChange}
                      placeholder="***************"
                      className="w-full px-4 border rounded-lg text-gray-700 focus:border-blue-500"
                    />
                  </div>
                </div>
                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                  Enviar
                </button>
              </div>
            </form>
          ) : formOption === "magicLink" ? (
            <form className="flex items-center justify-center h-full">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-xl font-semibold mb-4">Magic Link</h1>
                <p className="text-gray-600 mb-6">
                  Ingresa tu correo electrónico para poder enviarte el acceso
                </p>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="tu@correo.com"
                    value={emailOptionMagicLink}
                    onChange={handleMagicLinkEmailChange}
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
                  />
                </div>
                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                  Enviar
                </button>
              </div>
            </form>
          ) : formOption === "sign up" ? (
            <form className="row-start-2 px-3 py-2 h-full flex flex-col">
              <span>
                <label htmlFor="e-mail">Email</label>
                <input
                  type="email"
                  name="e-mail"
                  value={emailOptionSignUp}
                  onChange={handleSignUpEmailChange}
                />
              </span>
              <span>
                <label htmlFor="pass">Contraseña</label>
                <input
                  type="password"
                  name="pass"
                  value={passwordOptionSignUp}
                  onChange={handleSignUpPasswordChange}
                />
              </span>
            </form>
          ) : null}
        </>
      );
    };

    return <>{renderModalForms(formOption)}</>;
  }

  function renderSignUpOption() {
    return (
      <>
        <div className="flex flex-row gap-1 mx-auto my-2 row-start-3">
          <p className="text-black my-auto">No Tienes Una Cuenta?</p>
          <button
            className="p-2 text-center text-blue-500"
            onClick={() => renderForm("sign up")}
            children="Crea Una"
          />
        </div>
      </>
    );
  }

  function renderSignInOption() {
    return (
      <>
        <div className="flex flex-row gap-1 mx-auto my-2 row-start-3">
          <p className="text-black my-auto">Ya Tienes Una Cuenta?</p>
          <button
            className="p-2 text-center text-blue-500"
            onClick={() => renderForm("email")}
            children="Inicia Sesion"
          />
        </div>
      </>
    );
  }

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen, setIsModalOpen]);

  return (
    <>
      <div // fondo del modal
        id="modelConfirm"
        className="fixed z-50 inset-0 bg-gray-900/80 grid grid-cols-[1fr_40%_1fr] grid-rows-[1fr_90%_1fr]"
      >
        {form === "email" || form === "magicLink" ? (
          <div className="col-start-2 row-start-2 mx-auto w-full shadow-xl rounded-lg bg-white px-3 max-w-3xl grid grid-rows-[25%_1fr_10%]">
            {renderModalOptions()}
            {renderModalForms(form)}
            {renderSignUpOption()}
          </div>
        ) : (
          <div className="col-start-2 row-start-2 mx-auto w-full shadow-xl rounded-lg bg-white px-3 max-w-3xl grid grid-rows-[20%_1fr_10%]">
            {renderModalHeader("Registate")}
            {renderModalForms(form)}
            {renderSignInOption()}
          </div>
        )}
      </div>
    </>
  );
}
