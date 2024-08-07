"use client"

import { useEffect, useState, useCallback } from 'react';

export default function FilteredCards() {
  const [variedades, setVariedades] = useState('');
  useEffect(() => {
    
  }, []);

  return (
    <>
      <main className="w-full px-1 pt-3 pb-1 bg-normalColor11 rounded-r-xl">
        {JSON.stringify(variedades) || 'No hay variedades'}
      </main>
    </>
  );
}
