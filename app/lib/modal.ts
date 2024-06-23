import { CartItem } from "./Interfaces";

export interface ModalCarrito {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  cartItems: CartItem[];
}

export interface ModalMenu {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}