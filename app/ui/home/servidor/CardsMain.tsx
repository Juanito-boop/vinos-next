import { Variedades, Vinos } from "@/app/lib/Interfaces";
import { supabase } from "@/app/supabase";
import CarouselSection from "../cliente/CarouselSection";
async function fetchData(): Promise<{
  vinos: Vinos[];
  variedades: Variedades[];
}> {
  const { data: vinos, error: errorVinos } = await supabase
    .from("vinos")
    .select(
      `id, nombre, precio, variedad, id_unica, url_imagen, variedades(variedad), paises(pais)`
    );

  const { data: variedades, error: errorVariedades } = await supabase
    .from("variedades")
    .select(`id, variedad`);

  if (errorVinos || errorVariedades) {
    throw errorVinos || errorVariedades;
  }

  return {
    vinos: vinos as unknown as Vinos[],
    variedades: variedades as Variedades[],
  };
}

function groupVinosByVariedad(vinos: Vinos[]): { [key: string]: Vinos[] } {
  return vinos.reduce((acc: { [key: string]: Vinos[] }, vino: Vinos) => {
    const variedadId = vino.variedad.toString();
    if (!acc[variedadId]) {
      acc[variedadId] = [];
    }
    acc[variedadId].push(vino);
    return acc;
  }, {});
}

export default async function CardsMain() {
  try {
    const { vinos, variedades } = await fetchData();
    const vinosPorVariedad = groupVinosByVariedad(vinos);

    return (
      <main className="w-full px-1 pt-3 pb-1 bg-normalColor11 rounded-r-xl">
        {Object.keys(vinosPorVariedad).map((variedadId) => {
          const vinos = vinosPorVariedad[variedadId];
          const variedad = variedades.find(
            (v) => v.id === parseInt(variedadId, 10)
          );

          return (
            <CarouselSection
              key={variedadId}
              vinos={vinos}
              variedad={variedad?.variedad || "Unknown Variety"}
            />
          );
        })}
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data</div>;
  }
}