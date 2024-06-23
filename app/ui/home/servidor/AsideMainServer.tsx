import { Paises, Variedades } from "@/app/lib/Interfaces";
import { supabase } from "@/app/supabase";
import AsideMainClient from "../cliente/AsideMainClient";

// Function to fetch data from Supabase
async function fetchData() {
  const { data: variedades, error: errorVariedades } = await supabase
    .from("variedades")
    .select("id, variedad");

  const { data: paises, error: errorPaises } = await supabase
    .from("paises")
    .select("id, pais");

  if (errorVariedades || errorPaises) {
    throw new Error("Error fetching data");
  }

  return { variedades: variedades as Variedades[], paises: paises as Paises[] };
}

export default async function AsideMainServer() {
  try {
    const { variedades, paises } = await fetchData();
    return <AsideMainClient variedades={variedades} paises={paises} />;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data</div>;
  }
}
