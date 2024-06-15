import Image from "next/image";

export default function MainHeader() {
	return (
		 <>
			 <header className="z-0 mx-2.5 mb-3 w-auto rounded-b-xl bg-magenta-500 py-3">
				 <div className="mx-auto mb-[10px] flex items-center justify-evenly">
			
					 <a href="" className="inline-block p-3 rounded-md">
						 <Image
							 src="https://npuxpuelimayqrsmzqur.supabase.co/storage/v1/object/public/images/some/image-removebg-preview.svg"
							 alt="" width={120} height={120} />
					 </a>
			
					 <div className="inline-flex flex-col items-center justify-center w-auto h-auto">
						 <div className="text-center text-[40px] font-semibold text-black">LOS VINOS</div>
						 <div className="text-2xl font-semibold text-center text-black">Wine Bar</div>
						 <div className="text-2xl font-semibold text-center text-black">Villa de Leyva, Carrera 9 #11-47 Segundo piso</div>
						 <div className="inline-flex h-[26px] items-center justify-center self-stretch">
							 <div className="text-lg font-bold text-center text-black">CONTACTANOS (+57) 3219085857 <em className="fas fa-phone"></em>
							 </div>
						 </div>
					 </div>
			
					 <div className="relative mx-[50px] my-10" id="boton-menu">
						 <img src="https://npuxpuelimayqrsmzqur.supabase.co/storage/v1/object/public/images/some/bars-solid.svg"
							 id="icono-menu" alt="" className="w-10 align-top cursor-pointer" />
					 </div>
				 </div>
			 </header>
			 <script src="https://npuxpuelimayqrsmzqur.supabase.co/storage/v1/object/public/images/js/menu.js"></script>
		 </>
	)
}