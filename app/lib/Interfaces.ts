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
export interface Nueva {
  id: any;
  nombre: any;
  precio: any;
  variedad: any;
  id_unica: any;
  url_imagen: any;
  variedades: { variedad: any }[];
  paises: { pais: any }[];
}

export interface Variedades {
  id: number;
  variedad: string;
}

export interface Paises {
  id: number;
  pais: string;
}

// otras interfaces
export interface AsideProps {
  variedades: Variedades[];
  paises: Paises[];
}

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

export interface Country {
  pais: string;
}

export interface Variety {
  variedad: string;
}

export interface CartItem {
  productId: number;
  nombre: string;
  quantity: number;
  price: number;
  timestamp?: number; // Agregar timestamp opcional
}
