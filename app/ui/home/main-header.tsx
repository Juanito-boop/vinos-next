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
				 {/* <form id="myForm" action="" method="POST" className="inline-flex items-center w-full h-10 mx-auto justify-evenly">
					 <div className="flex items-center justify-center w-screen p-5">
						 <div className="w-full p-5 rounded-lg">
							 <div className="flex">
								 <div
									 className="flex items-center justify-center w-10 p-5 border-r rounded-tl-lg rounded-bl-lg border-violet-500 bg-violet-200">
									 <svg viewBox="0 0 20 20" aria-hidden="true" className="absolute w-5 transition pointer-events-none fill-black">
										 <path
											 d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z">
										 </path>
									 </svg>
								 </div>
								 <input type="text" className="w-full pl-2 text-base font-semibold bg-white border-violet-500 outline-0"
									 placeholder="" id="" disabled />
								 <input type="button" value="Buscar"
									 className="p-2 font-semibold text-white transition-colors rounded-tr-lg rounded-br-lg bg-violet-600 hover:bg-violet-800" />
							 </div>
						 </div>
					 </div>
				 </form> */}
			 </header>
			 <script src="https://npuxpuelimayqrsmzqur.supabase.co/storage/v1/object/public/images/js/menu.js"></script>
		 </>
	)
}