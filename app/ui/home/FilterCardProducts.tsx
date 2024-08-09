"use client"

import { useEffect, useState } from 'react';

interface Main {
  id: number;
  nombre: string;
  precio: number;
  variedad: number;
  id_unica: number;
  url_imagen: string;
  variedades: Variedades;
  paises: Paises;
}

interface Paises {
  pais: string;
}

interface Variedades {
  variedad: string;
}

export default function FilteredCards() {
  const [variedadesArray, setVariedadesArray] = useState<string[]>([]);
  const [data, setData] = useState<{ vinos: Main[], variedades: Variedades[] } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Función que actualiza variedadesArray si hay cambios en los parámetros de la URL
    const checkVariedades = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const variedadesValue = urlParams.get('variedades');

      if (variedadesValue) {
        const nuevasVariedades = variedadesValue.split(',');
        setVariedadesArray((prevArray) => {
          const updatedArray = [...new Set(nuevasVariedades)];
          // Solo actualizar si hay un cambio real
          if (JSON.stringify(prevArray) !== JSON.stringify(updatedArray)) {
            return updatedArray;
          }
          return prevArray;
        });
      } else {
        setVariedadesArray([]);
      }
    };

    // Ejecutar la función al cargar el componente
    checkVariedades();

    // Escuchar cambios en el evento "popstate" (cuando la historia de navegación cambia)
    const handlePopState = () => checkVariedades();
    window.addEventListener('popstate', handlePopState);

    // Limpieza del event listener al desmontar el componente
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/vinos?variedades=${variedadesArray.join(',')}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [variedadesArray]);


  if (loading) return <div>Loading...</div>;

  return (
    <main className="w-full px-1 pt-3 pb-1 bg-normalColor11 rounded-r-xl">
      {JSON.stringify(data)}
    </main>
  );
}
