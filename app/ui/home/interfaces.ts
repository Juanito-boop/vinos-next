export interface vinosTable {
  id: number;
  nombre: string;
  precio: number;
  variedad: number;
  id_unica: number;
  url_imagen: string;
  variedades: Variedades;
  paises: Paises;
}

export interface Paises {
  pais: string;
}

export interface Variedades {
  id: number;
  variedad: string;
}

export interface variedadesTable {
  id: number;
  variedad: string;
}

export type Vino = {
  id: number;
  nombre: string;
  precio: number;
  variedad: number;
  id_unica: number;
  url_imagen: string;
  variedades: {
    variedad: string;
  };
  paises: {
    pais: string;
  };
};

export type DataOrganizada = {
  [key: string]: Vino[];
};
