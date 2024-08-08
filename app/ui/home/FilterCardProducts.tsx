"use client"

import { useEffect, useState, useCallback } from 'react';
// import { useLocation } from 'react-router-dom';

export default function FilteredCards() {
  // leer los parametros de la url y actualizar el estado del componente
  // const [variedadesArray, setVariedadesArray] = useState<string[]>([]);
  // const location = useLocation();

  // const checkVariedades = () => {
  //   const urlParams = new URLSearchParams(location.search);
  //   const variedadesValue = urlParams.get('variedades');

  //   if (variedadesValue) {
  //     const nuevasVariedades = variedadesValue.split(','); // Separar por comas
  //     setVariedadesArray([...new Set(nuevasVariedades)]);
  //   } else {
  //     setVariedadesArray([]);
  //   }
  // };

  // useEffect(() => {
  //   checkVariedades();
  // }, [location.search]);

  return (
    <>
      {/* {variedadesArray.length > 0 ? (
        <main className="w-full px-1 pt-3 pb-1 bg-normalColor11 rounded-r-xl">
          <p>Variedades seleccionadas: {variedadesArray.join(', ')}</p>
        </main>
      ) : (
        <main className="w-full px-1 pt-3 pb-1 bg-normalColor11 rounded-r-xl">
          <p>No hay variedades seleccionadas</p>
        </main>
      )} */}
    </>
  );
}
