import React, { useEffect } from "react";
import { type ModalCarrito } from "@/app/lib/modal";

export default function ModalCarrito({
  isModalOpen,
  setIsModalOpen,
  cartItems,
}: ModalCarrito) {
  if (!isModalOpen) return null;

  function renderHeader() {
    return (
      <>
        <div className="flex justify-between p-2">
          <button className="mr-auto inline-flex items-center rounded-lg bg-transparent p-1.5">
            <img src="/carrito.svg" alt="Carrito" className="h-5 w-5" />
          </button>
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
      </>
    );
  }

  /**
   * Renders a section of a modal that displays the items in a shopping cart.
   * @returns JSX element representing the cart items section of the modal
   */
  function displayCartItems(): JSX.Element {
    return (
      <>
        <div className="pb-3 pt-0 text-center">
          <h3 className="text-xl font-normal text-gray-500">
            Este es tu carrito de compras
          </h3>
          <div className="flex flex-col gap-2 mt-2 h-full">
            <div className="grid grid-cols-[10%_1fr_15%_15%] gap-x-1 rounded px-3">
              <span className="text-lg text-start col-start-1" children="ID" />
              <span className="text-lg text-start col-start-2" children="Producto" />
              <span className="text-lg text-center col-start-3" children="Cantidad" />
              <span className="text-lg text-center col-start-4" children="Precio" />
            </div>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div
                  key={item.productId}
                  className={`grid grid-cols-[10%_1fr_15%_15%] gap-x-1 rounded px-3 py-1.5 ${
                    index % 2 === 0 ? "bg-blue-100" : "bg-green-100"
                  }`}
                >
                  <span className="text-lg col-start-1 text-start" children={item.productId} />
                  <span className="text-lg col-start-2 text-start" children={item.nombre} />
                  <span className="text-lg col-start-3 text-center" children={item.quantity} />
                  <span className="text-lg col-start-4 text-center" children={"$" + item.price} />
                </div>
              ))
            ) : (
              <div className="text-lg my-3 bg-blue-100 p-3">
                No hay elementos en el carrito.
              </div>
            )}
          </div>
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
      <div
        id="modelConfirm"
        className={
          "fixed z-50 inset-0 bg-gray-900/60 " +
          "grid grid-cols-[1fr_60%_1fr] grid-rows-[1fr_80%_1fr]"
        }
      >
        <div
          className={
            "col-start-2 row-start-2 mx-auto w-full shadow-xl rounded-lg bg-white max-w-3xl " +
            "flex flex-col justify-between"
          }
        >
          <div className="p-3 pb-0">
            {renderHeader()}
            {displayCartItems()}
          </div>
          <div className="flex flex-row justify-end">
            <button
              className="m-3 mt-0 py-2 px-4 text-lg border rounded bg-green-500 text-white uppercase"
              onClick={() => setIsModalOpen(false)}
              children="Pagar"
            />
          </div>
        </div>
      </div>
    </>
  );
}
