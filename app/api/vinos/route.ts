// /app/api/vinos/route.ts

import { supabase } from "@/app/supabase";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams);
  const variedades = searchParams.get("variedades")?.split(",") || [];
  console.log(variedades);

  let query = supabase
    .from("vinos")
    .select(
      `id, nombre, precio, variedad, id_unica, url_imagen, variedades(variedad), paises(pais)`
    );

  if (variedades.length > 0) {
    query = query.in("variedades.variedad", variedades);
  }

  const { data: vinos, error: errorVinos } = await query;
  const { data: variedadesData, error: errorVariedades } = await supabase
    .from("variedades")
    .select(`id, variedad`);

  if (errorVinos || errorVariedades) {
    return NextResponse.json(
      { error: errorVinos || errorVariedades },
      { status: 500 }
    );
  }

  return NextResponse.json({
    vinos: vinos,
    variedades: variedadesData,
  });
}
