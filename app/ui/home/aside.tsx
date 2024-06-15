import { Paises, Variedades } from "@/app/lib/Interfaces";
import { supabase } from "@/app/supabase";
import { poppins } from "@/app/ui/fonts";

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

// Function to render a list of items
function renderList(items: { id: number; name: string }[], title: string) {
  return (
    <section className="pb-2 border-t bg-normalColor11 border-principalColor1 rounded-b-xl">
      <span
        className="flex items-center justify-center my-2 text-xl font-bold text-principalColor1"
        children={title}
      />
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

export default async function AsideMain() {
  try {
    const { variedades, paises } = await fetchData();

    return (
      <aside className="flex flex-col max-w-[20%] min-w-[15%] rounded-l-xl bg-normalColor11">
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
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data</div>;
  }
}
