import { supabase } from "@/app/supabase"
import Image from "next/image";

export default async function CardsMain() {
  try {
    let { data: vinos, error: errorVinos } = await supabase
      .from('vinos')
      .select(`id, nombre, precio, id_unica, url_imagen, variedades(variedad), paises(pais)`)
      .limit(4)

    let { data: variedades, error: errorVariedades } = await supabase
      .from('variedades')
      .select(`id,variedad`)

    if (errorVinos || errorVariedades) throw errorVinos || errorVariedades;

    // console.log(JSON.stringify(vinos, null, 2))
    return (
      <>
        <main className="w-full bg-normalColor11 rounded-xl px-1 pb-1 pt-3">
          <section className="mx-[5px] pb-[3%] items-center overflow-x-auto-scroll-m-0 scroll-smooth scroll-snap-x-mandatory cont" id="">
            <div className="grid grid-flow-col px-2 [&>div]:hover:backdrop:blur justify-around">
              {vinos?.map((vino: any) => (
                <div className="rounded-t-[10px] group-[transition-transform transform hover:translate-z-2 hover:scale-105 hover:shadow-xl hover:duration-hover:ease-in-out] max-w-[260px] ml-1 scroll-snap-align-start z-10 mx-2.5" key={vino.id_unica}>
                  <Image
                    className="my-2 rounded-[10px]"
                    src={vino.url_imagen}
                    alt={vino.nombre}
                    width={250}
                    height={250}
                  />
                  <div className="p-4 border-2 border-[#efb810] rounded-b-[10px]">
                    <span className="mb-2 text-[0.9em] font-poppins text-principalColor1 font-semibold">
                      {vino.nombre}
                    </span>
                    <p className="mb-2 text-[0.9em] font-poppins text-principalColor1">{vino.variedades.variedad}</p>
                    <div className="flex items-center justify-between">
                      <p className="mr-0 font-semibold font-poppins text-principalColor1 text-[0.9em]">${vino.precio} COP</p>
                      <a href="/info/" className="text-emerald-500 background-transparent font-semibold uppercase py-1 px-2 outline-none focus:outline-none ease-linear transition-all duration-150 border border-emerald-500 rounded-lg text-xs">INFORMACIÓN</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </>
    )
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
