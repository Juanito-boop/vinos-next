export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      paises: {
        Row: {
          id: number
          pais: string | null
        }
        Insert: {
          id?: number
          pais?: string | null
        }
        Update: {
          id?: number
          pais?: string | null
        }
        Relationships: []
      }
      secciones: {
        Row: {
          activo: boolean
          id: number
          id_unica: number | null
          nombre: string
        }
        Insert: {
          activo?: boolean
          id?: number
          id_unica?: number | null
          nombre: string
        }
        Update: {
          activo?: boolean
          id?: number
          id_unica?: number | null
          nombre?: string
        }
        Relationships: []
      }
      usuarios: {
        Row: {
          apellido: string | null
          clave: string | null
          email: string | null
          id: number
          nombre: string | null
          rol: string | null
          usuario: string | null
        }
        Insert: {
          apellido?: string | null
          clave?: string | null
          email?: string | null
          id?: number
          nombre?: string | null
          rol?: string | null
          usuario?: string | null
        }
        Update: {
          apellido?: string | null
          clave?: string | null
          email?: string | null
          id?: number
          nombre?: string | null
          rol?: string | null
          usuario?: string | null
        }
        Relationships: []
      }
      variedades: {
        Row: {
          id: number
          pais_origen: number | null
          variedad: string | null
        }
        Insert: {
          id?: number
          pais_origen?: number | null
          variedad?: string | null
        }
        Update: {
          id?: number
          pais_origen?: number | null
          variedad?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "variedades_pais_origen_fkey"
            columns: ["pais_origen"]
            isOneToOne: false
            referencedRelation: "paises"
            referencedColumns: ["id"]
          }
        ]
      }
      vinos: {
        Row: {
          activo: boolean
          anada: number | null
          bodega: string
          busqueda: number | null
          descripcion: string | null
          id: number
          id_categoria: number | null
          id_unica: number | null
          maridaje: string | null
          nivel_alcohol: number | null
          nombre: string
          notas_cata: string | null
          pais: number | null
          precio: number | null
          promocion: boolean
          region: string
          stock: number | null
          temperatura_consumo: string | null
          tipo: string | null
          tipo_barrica: string | null
          url_imagen: string | null
          variedad: number | null
        }
        Insert: {
          activo?: boolean
          anada?: number | null
          bodega: string
          busqueda?: number | null
          descripcion?: string | null
          id?: number
          id_categoria?: number | null
          id_unica?: number | null
          maridaje?: string | null
          nivel_alcohol?: number | null
          nombre: string
          notas_cata?: string | null
          pais?: number | null
          precio?: number | null
          promocion?: boolean
          region: string
          stock?: number | null
          temperatura_consumo?: string | null
          tipo?: string | null
          tipo_barrica?: string | null
          url_imagen?: string | null
          variedad?: number | null
        }
        Update: {
          activo?: boolean
          anada?: number | null
          bodega?: string
          busqueda?: number | null
          descripcion?: string | null
          id?: number
          id_categoria?: number | null
          id_unica?: number | null
          maridaje?: string | null
          nivel_alcohol?: number | null
          nombre?: string
          notas_cata?: string | null
          pais?: number | null
          precio?: number | null
          promocion?: boolean
          region?: string
          stock?: number | null
          temperatura_consumo?: string | null
          tipo?: string | null
          tipo_barrica?: string | null
          url_imagen?: string | null
          variedad?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "vinos_id_categoria_fkey"
            columns: ["id_categoria"]
            isOneToOne: false
            referencedRelation: "secciones"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vinos_pais_fkey"
            columns: ["pais"]
            isOneToOne: false
            referencedRelation: "paises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vinos_variedad_fkey"
            columns: ["variedad"]
            isOneToOne: false
            referencedRelation: "variedades"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
