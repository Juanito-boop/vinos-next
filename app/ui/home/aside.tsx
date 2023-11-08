import { supabase } from '@/app/supabase'
import { poppins } from '@/app/ui/fonts'

export default async function AsideMain() {

  let { data: variedades, error: errorVariedades } = await supabase.from('variedades').select('id, variedad')
  let {data: paises, error: errorPaises} = await supabase.from('paises').select('id, pais')
  
  return (
    <aside className='flex flex-col max-w-[20%] min-w-[15%] rounded-b-xl bg-normalColor11 rounded-xl'>
      <span
        className={`${poppins.className} flex items-center justify-center text-[1.5em] font-bold text-principalColor1 bg-normalColor11 rounded-t-xl px-5 py-2`}>
        FILTROS
      </span>
      <section className='pb-2 border-t bg-normalColor11 border-principalColor1 rounded-b-xl'>
        <span className='flex items-center justify-center my-2 text-xl font-bold text-principalColor1'>CEPAS</span>
        <ul className='flex flex-col gap-2'>
          {variedades?.map((variedad: any) => (
            <li key={variedad.id} className='flex items-start pl-3 text-sm font-semibold text-black'>
              {variedad.variedad}
            </li>
          ))}
        </ul>
      </section>
      <section className='pb-2 border-t bg-normalColor11 border-principalColor1 rounded-b-xl'>
        <span className='flex items-center justify-center my-2 text-xl font-bold text-principalColor1'>PAISES</span>
        <ul className='flex flex-col gap-2'>
          {paises?.map((pais: any) => (
            <li key={pais.id} className='flex items-start pl-3 text-sm font-semibold text-black'>
              {pais.pais}
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}