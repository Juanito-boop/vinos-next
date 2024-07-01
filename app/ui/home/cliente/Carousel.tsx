"use client";

import Image from "next/image";
import { CarouselProps } from "@/app/lib/Interfaces";

export default function Carousel({
	vinos,
	page,
	itemsPerPage,
	onNextPage,
	onPrevPage,
}: CarouselProps) {
	const startIndex = page * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const vinosEnPagina = vinos.slice(startIndex, endIndex);

	return (
    <>
      <div className="flex">
        <button
          className="px-1 py-4 m-auto border rounded-full bg-white/80 border-principalColor1 transition-transform duration-300 ease-in-out hover:scale-105"
          onClick={onPrevPage}
        >
          {"←"}
        </button>
        <div
          className={
            "grid justify-center mx-auto transition-transform duration-300 ease-in-out transform-gpu" +
            "A:grid-cols-[repeat(1,_minmax(250px,_270px))] B:grid-cols-[repeat(2,_minmax(250px,_270px))] C:grid-cols-[repeat(3,_minmax(250px,_270px))] D:grid-cols-[repeat(4,_minmax(250px,_270px))] E:grid-cols-[repeat(5,_minmax(250px,_270px))]"
          }
        >
          {vinosEnPagina.map((vino) => (
            <article
              className="rounded-t-[10px] transform transition-transform hover:scale-105 hover:shadow-xl hover:duration-150 hover:ease-in-out min-w-[240px] max-w-[250px] scroll-snap-align-start z-10 mx-auto"
              key={vino.id_unica}
            >
              <a
                href={`/informacion/${
                  vino.nombre +
                  " " +
                  vino.variedades.variedad +
                  " ~ " +
                  vino.id_unica
                }`}
              >
                <Image
                  className="my-2 rounded-[10px]"
                  src={vino.url_imagen}
                  alt={vino.nombre}
                  width={250}
                  height={250}
                />
              </a>
              <div className="p-4 border-2 border-principalColor1 rounded-b-[10px]">
                <span
                  className="mb-2 text-[0.9em] font-poppins text-principalColor1 font-semibold"
                >{vino.nombre}</span>
                <p
                  className="mb-2 text-[0.9em] font-poppins text-principalColor1"
                >
                  {vino.variedades.variedad || "Variedad Desconocida"}
                </p>
                <div className="flex items-center justify-between">
                  <p
                    className="mr-0 font-semibold font-poppins text-principalColor1 text-[0.9em]"
                  >
                    {`$${vino.precio} COP`}
                  </p>
                  <a
                    href={`/informacion/${
                      vino.nombre +
                      " " +
                      vino.variedades.variedad +
                      " ~ " +
                      vino.id_unica
                    }`}
                    className="px-2 py-1 text-xs font-semibold uppercase transition-all duration-150 ease-linear border rounded-lg outline-none text-emerald-500 background-transparent focus:outline-none border-emerald-500"
                  >
                    {"INFORMACIÓN"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <button
          className="px-1 py-4 m-auto border rounded-full bg-white/80 border-principalColor1"
          onClick={onNextPage}
        >
          {"→"}
        </button>
      </div>
    </>
  );
}
