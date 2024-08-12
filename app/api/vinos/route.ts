import { supabase } from "@/app/supabase";
import { NextResponse } from "next/server";
import { vinosTable, variedadesTable } from "./interfaces";

function groupVinosByVariedad(
  vinos: vinosTable[],
  variedades: variedadesTable[]
): { [key: string]: vinosTable[] } {
  const variedadMap = new Map(variedades.map((v) => [v.id, v.variedad]));
  const groupedVinos = vinos.reduce(
    (acc: Map<string, vinosTable[]>, vino: vinosTable) => {
      const nombreVariedad = variedadMap.get(vino.variedad);
      if (nombreVariedad) {
        if (!acc.has(nombreVariedad)) {
          acc.set(nombreVariedad, []);
        }
        acc.get(nombreVariedad)!.push(vino);
      }
      return acc;
    },
    new Map<string, vinosTable[]>()
  );
  return Object.fromEntries(groupedVinos);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const variedades = searchParams.get("variedades")?.split(",") || [];

  try {
    let vinosData, variedadesData;

    if (variedades.length === 0) {
      // Obtener todos los vinos y todas las variedades si no hay filtros
      const { data: allVinos, error: errorVinos } = await supabase
        .from("vinos")
        .select(
          `id, nombre, precio, variedad, id_unica, url_imagen, variedades(variedad), paises(pais)`
        );

      if (errorVinos) throw errorVinos;
      vinosData = allVinos;

      const { data: allVariedades, error: errorVariedades } = await supabase
        .from("variedades")
        .select(`id, variedad`);

      if (errorVariedades) throw errorVariedades;
      variedadesData = allVariedades;
    } else {
      // Filtrar por variedades especificadas
      const { data: filteredVariedades, error: errorVariedades } =
        await supabase
          .from("variedades")
          .select(`id, variedad`)
          .in("variedad", variedades);

      if (errorVariedades) throw errorVariedades;
      variedadesData = filteredVariedades;

      const { data: allVinos, error: errorVinos } = await supabase
        .from("vinos")
        .select(
          `id, nombre, precio, variedad, id_unica, url_imagen, variedades(variedad), paises(pais)`
        )
        .in(
          "variedad",
          variedadesData.map((v: {id: number, variedad: string}) => v.id)
        );

      if (errorVinos) throw errorVinos;
      vinosData = allVinos;
    }

    // Agrupar vinos por variedad
    const groupedVinos = groupVinosByVariedad(
      vinosData as unknown as vinosTable[],
      variedadesData as unknown as variedadesTable[]
    );

    return NextResponse.json(groupedVinos);
  } catch (error) {
    // Manejo de errores
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
