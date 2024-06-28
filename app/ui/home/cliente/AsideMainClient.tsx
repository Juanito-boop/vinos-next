"use client";

import useCart from "@/app/hooks/carrito";
import { Paises, Variedades } from "@/app/lib/Interfaces";
import { poppins } from "@/app/ui/fonts";
import { useState } from "react";
import ModalCarrito from "../../../modales/carrito/ModalCarrito";

// Props interface
interface AsideMainClientProps {
	variedades: Variedades[];
	paises: Paises[];
}

// Function to render a list of items
/**
 * Renders a section with a title and a list of items.
 * @param items An array of objects with id and name properties.
 * @param title The title of the list section.
 * @returns JSX element representing the styled section with title and items list.
 */
function renderList(items: { id: number; name: string }[], title: string) {
	return (
		<section className="pb-2 border-t bg-normalColor11 border-principalColor1 rounded-b-xl">
			<span className="flex items-center justify-center my-2 text-xl font-bold text-principalColor1">
				{title}
			</span>
			<ul className="flex flex-col gap-2">
				{items.map((item) => (
					<li
						key={item.id}
						className="flex items-start pl-3 text-sm font-semibold text-black"
					>
						{item.name}
					</li>
				))}
			</ul>
		</section>
	);
}

export default function AsideMainClient({
	variedades,
	paises,
}: AsideMainClientProps) {
	const { cartItems } = useCart();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	return (
		<aside className="flex flex-col max-w-[20%] min-w-[15%] rounded-l-xl bg-normalColor11">
			<button
				className="w-16 h-16 p-3 mx-auto my-4 border border-principalColor1 rounded-lg"
				onClick={handleOpenModal}
			>
				<img src="/carrito.svg" alt="Carrito" />
			</button>
			{isModalOpen && (
				<ModalCarrito
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					cartItems={cartItems}
				/>
			)}
			<span
				className={`${poppins.className} flex items-center justify-center text-[1.5em] font-bold text-principalColor1 bg-normalColor11 rounded-t-xl px-5 py-2`}
				children="FILTROS"
			/>
			{renderList(
				variedades.map((v) => ({ id: v.id, name: v.variedad })),
				"VARIEDADES"
			)}
			{renderList(
				paises.map((p) => ({ id: p.id, name: p.pais })),
				"PAISES"
			)}
		</aside>
	);
}