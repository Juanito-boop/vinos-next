// interfaces de la bd
export interface Vinos {
	id: number;
	nombre: string;
	precio: number;
	variedad: number;
	id_unica: number;
	url_imagen: string;
	variedades: Variety;
	paises: Country;
}

export interface Variedades {
	id: number;
	variedad: string;
}

export interface Paises {
	id: number;
	pais: string;
}

export interface Country {
	pais: string;
}

export interface Variety {
	variedad: string;
}

// otras interfaces
export interface CarouselProps {
  vinos: Vinos[];
  page: number;
  itemsPerPage: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

export interface CarouselSectionProps {
  vinos: Vinos[];
  variedad: string;
}

export interface PaginationDotsProps {
  currentPage: number;
  totalPages: number;
  onPageClick: (index: number) => void;
}