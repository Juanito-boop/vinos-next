"use client";

import useCart from "@/app/hooks/carrito";
import { CartItem } from "@/app/lib/Interfaces";
import { VinosT } from "@/app/lib/tablas";
import { supabase } from "@/app/supabase";
import MainHeader from "@/app/ui/home/main-header";
import ModalCarrito from "@/app/ui/home/modal/carrito/ModalCarrito";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { vino: string } }) {
	const [vino, setVino] = useState<VinosT>({} as VinosT);
	const [existe, setExiste] = useState(false);
	const { cartItems, addToCart, removeFromCart } = useCart();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [contador, setContador] = useState(1);

	const vinoDecoded = decodeURIComponent(params.vino);
	const parts = vinoDecoded.split(" ~ ");
	const id_unica: number =
		parts.length > 0 ? Number(parts.pop()?.trim() ?? 0) : 0;

	const incrementar = () => setContador(contador + 1);
	const decrementar = () => {
		if (contador > 1) {
			setContador(contador - 1);
		}
	};

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	const handleAddToCart = (vino: VinosT) => {
		addToCart({
			productId: vino.id_unica,
			nombre: vino.nombre + " - " + vino.variedades?.variedad || vino.tipo,
			quantity: contador,
			price: vino.precio,
		});
		setExiste(true);
	};

	const handleRemoveFromCart = (productId: number) => {
		removeFromCart(productId);
		setExiste(false);
		setContador(1);
	};

	const banderas: { [key: string]: () => JSX.Element | null } = {
		Argentina: () => <img src="/Argentina.svg" alt="Bandera Argentina" />,
		Chile: () => <img src="/Chile.svg" alt="Bandera Chile" />,
		Colombia: () => <img src="/Colombia.svg" alt="Bandera Colombia" />,
		España: () => <img src="/España.svg" alt="Bandera España" />,
		Francia: () => <img src="/Francia.svg" alt="Bandera Francia" />,
		Italia: () => <img src="/Italia.svg" alt="Bandera Italia" />,
	};

	const getBandera = (banderaName: string) => {
		const bandera = banderas[banderaName];
		return bandera ? bandera() : null;
	};

	const renderCartButton = (action: any, label: string, imgSrc: string) => (
		<button
			className="grid grid-cols-[10%_1fr] gap-3 border border-black w-52 py-2 px-4 rounded-lg my-auto ml-auto bg-white/90"
			onClick={action}
		>
			<img src={imgSrc} className="col-start-1 w-5 h-5 m-auto" />
			<p className="col-start-2 mx-auto">{label}</p>
		</button>
	);

	const InfoRow: ({ title, content }: { title: string; content: string | number }) => JSX.Element = ({ title, content }: { title: string; content: string | number; }) => (
		<section className="grid grid-cols-[25%_1fr] grid-flow-col gap-x-2">
			<span className="col-span-1 text-xl font-bold">{title}</span>
			<span className="col-span-1 text-xl pl-1 pb-1 my-auto">{content}</span>
		</section>
	);

	useEffect(() => {
		const fetchVinos = async () => {
			if (id_unica) {
				const { data: vino, error } = await supabase
					.from("vinos")
					.select("*, variedades(variedad), paises(pais)")
					.eq("id_unica", id_unica);

				if (error) {
					console.error("Error al obtener los vinos:", error);
					return;
				}

				setVino(vino[0]);
			}
		};

		fetchVinos();
	}, [id_unica]);

	useEffect(() => {
		const cartItems: CartItem[] = JSON.parse(
			localStorage.getItem("cartItems") || "[]"
		);
		const productoEnCarrito = cartItems.some(
			(item) => item.productId === vino?.id_unica
		);

		setExiste(productoEnCarrito);
	}, [vino]);

	useEffect(() => {
		const handleEscPress = (event: KeyboardEvent) => {
			if (event.key === "Escape" && isModalOpen) {
				handleCloseModal();
			}
		};

		if (isModalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		document.addEventListener("keydown", handleEscPress);

		return () => {
			document.removeEventListener("keydown", handleEscPress);
			document.body.style.overflow = "unset";
		};
	}, [isModalOpen, handleCloseModal]);

	return (
		<>
			<MainHeader />
			<main className="mx-2.5 w-auto rounded-xl bg-magenta-500 grid grid-cols-[1fr_7fr_1fr] sticky">
				<aside className="col-span-1 flex flex-row justify-center align-top">
					<button
						className="border border-principalColor1 rounded-lg p-5 w-20 h-20 my-3 bg-white/90"
						onClick={handleOpenModal}
					>
						<img src="/carrito.svg" alt="" />
					</button>
					{isModalOpen && (
						<ModalCarrito
							isModalOpen={isModalOpen}
							setIsModalOpen={setIsModalOpen}
							cartItems={cartItems}
						/>
					)}
				</aside>
				<div className="col-start-2">
					<div className="flex flex-row justify-center h-auto">
						<div className="w-[40%] pb-5 px-2 pt-1 relative">
							<img src={vino.url_imagen} className="mt-3 p-1" alt="" />
							<div
								className="absolute top-0 right-0 mr-5 mt-5"
								style={{ width: "64px", height: "64px" }}
							>
								{getBandera(vino.paises?.pais || "")}
							</div>
						</div>
						<div className="w-[60%] px-2 pt-1 flex flex-col gap-y-1 pb-5">
							<h1
								className="text-4xl mx-3 mt-3 border-b border-black w-auto pb-2 text-center"
								children={
									vino.nombre + " " + vino.variedades?.variedad || vino.tipo
								}
							/>
							<p className="text-xl" children={vino.descripcion} />
							<div className="flex flex-row py-2 justify-between">
								<span
									className="text-2xl mx-3 my-auto"
									children={"$" + vino.precio + " COP"}
								/>
								{existe ? (
									<div className="flex flex-row gap-3">
										<div className="flex flex-row justify-center gap-4"></div>
										{renderCartButton(
											() => handleRemoveFromCart(vino.id_unica),
											"Eliminar Del carrito",
											"/carrito.svg"
										)}
									</div>
								) : (
									<div className="flex flex-row gap-3">
										<div className="flex flex-row bg-white rounded-xl">
											<button
												onClick={decrementar}
												className="text-center px-3 py-1 bg-red-500 text-white rounded-l"
												children="-"
											/>
											<span className="w-16 text-center my-auto ">
												{contador}
											</span>
											<button
												onClick={incrementar}
												className="text-center px-3 py-1 bg-green-500 text-white rounded-r"
												children="+"
											/>
										</div>
										{renderCartButton(
											() => handleAddToCart(vino),
											"Agregar Al carrito",
											"/carrito.svg"
										)}
									</div>
								)}
							</div>
							<InfoRow title="Bodega" content={vino.bodega} />
							<InfoRow title="Región" content={vino.region} />
							<InfoRow title="Tipo" content={`Vino ${vino.tipo}`} />
							<InfoRow title="Tipo Barrica" content={vino.tipo_barrica} />
							<InfoRow title="Notas de Cata" content={vino.notas_cata} />
							<InfoRow title="Maridaje" content={vino.maridaje} />
							<InfoRow
								title="Temperatura de Consumo"
								content={vino.temperatura_consumo}
							/>
						</div>
					</div>
				</div>
				<aside className="col-span-1"></aside>
			</main>
		</>
	);
}
