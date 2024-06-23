export interface VinosT {
	id: number;
	nombre: string;
	variedad: number;
	anada: number;
	bodega: string;
	pais: number;
	region: string;
	precio: number;
	stock: number;
	tipo: Tipo;
	nivel_alcohol: number;
	tipo_barrica: string;
	descripcion: string;
	notas_cata: string;
	temperatura_consumo: string;
	maridaje: string;
	id_categoria: number;
	activo: boolean;
	id_unica: number;
	url_imagen: string;
	promocion: boolean;
	busqueda: number;
	variedades: Variedades;
	paises: Paises;
}

export enum Tipo {
	Blanco = "Blanco",
	Tinto = "Tinto",
}

export interface Paises {
	pais: string;
}

export interface Variedades {
	variedad: string;
}

export interface PaisesT {
	id: number;
	pais: string;
}

export interface SeccionesT {
	id: number;
	nombre: string;
	activo: boolean;
	id_unica: number;
}

export interface VariedadesT {
	id: number;
	variedad: string;
	pais_origen: number;
}