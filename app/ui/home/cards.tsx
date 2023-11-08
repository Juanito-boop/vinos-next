import { supabase } from "@/app/supabase";
import Image from "next/image";
import Slider from "react-slick";
// import Database from "@/app/ui/models/supabase";

// Función principal para renderizar las tarjetas de vinos
export default async function CardsMain() {
  try {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    // Traer la data de los vinos desde la base de datos usando el cliente de Supabase
    const { data: vinos, error: errorVinos } = await supabase
      .from('vinos')
      .select(`id, nombre, precio, variedad, id_unica, url_imagen, variedades(variedad), paises(pais)`);

    // Traer la data de las variedades desde la base de datos usando el cliente de Supabase
    const { data: variedades, error: errorVariedades } = await supabase
      .from('variedades')
      .select(`id,variedad`);

    // Si hay algún error en la obtención de los datos, se lanza una excepción
    if (errorVinos || errorVariedades) {
      throw errorVinos || errorVariedades;
    }
    
    // Agrupar los vinos por su variedad
    const vinosPorVariedad = vinos.reduce((acc: { [key: string]: any; }, vino: { variedad: string; }) => {
      const variedadId = vino.variedad;
      if (!acc[variedadId]) {
        acc[variedadId] = [];
      }
      acc[variedadId].push(vino);
      return acc;
    }, {});

    
    // Función para renderizar los vinos
    const renderVinos = (vinos: any[]) => {

      return vinos?.map((vino: any) => (
        // Crear una tarjeta para cada vino
        <div className="rounded-t-[10px] group-[transition-transform transform hover:translate-z-2 hover:scale-105 hover:shadow-xl hover:duration-hover:ease-in-out] max-w-[260px] ml-1 scroll-snap-align-start z-10 mx-2.5" key={vino.nombre - vino.variedades.variedad}>
          <Image
            className="my-2 rounded-[10px]"
            src={vino.url_imagen}
            alt={vino.nombre}
            width={250}
            height={250}
          />
          <div className="p-4 border-2 border-principalColor1 rounded-b-[10px]">
            <span className="mb-2 text-[0.9em] font-poppins text-principalColor1 font-semibold">
              {vino.nombre}
            </span>
            <p className="mb-2 text-[0.9em] font-poppins text-principalColor1">{vino.variedades.variedad}</p>
            <div className="flex items-center justify-between">
              <p className="mr-0 font-semibold font-poppins text-principalColor1 text-[0.9em]">${vino.precio} COP</p>
              <a href="/info/" className="px-2 py-1 text-xs font-semibold uppercase transition-all duration-150 ease-linear border rounded-lg outline-none text-emerald-500 background-transparent focus:outline-none border-emerald-500">INFORMACIÓN</a>
            </div>
          </div>
        </div>
      ));
    };

    // Renderizar la sección principal con las tarjetas de vinos
    return (
      <>
        <main className="w-full px-1 pt-3 pb-1 bg-normalColor11 rounded-xl">
          {Object.keys(vinosPorVariedad).map((variedadId) => {
            const vinos = vinosPorVariedad[variedadId];
            const vari = variedades?.find((variedad: { variedad: string }) => {
              return variedad.variedad === vinos[0].variedades.variedad;
            });
            console.log(vari);
            return (
              <section className="mx-[5px] pb-[3%] items-center overflow-x-auto-scroll-m-0 scroll-smooth scroll-snap-x-mandatory cont">
                <h2 className="my-3 flex items-center justify-center font-poppins text-[2em] font-bold leading-10 text-principalColor1 uppercase">{vari?.variedad}</h2>
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-2 [&>div]:hover:backdrop:blur justify-around">
                  {renderVinos(vinos)}
                </div>
              </section>
            );
          })}
        </main>
      </>
    );
  } catch (error) {
    // En caso de error, se imprime en la consola
    console.error('Error fetching data:', error);
  }
}