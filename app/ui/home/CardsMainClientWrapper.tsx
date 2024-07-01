"use client";

import dynamic from "next/dynamic";
import { useParams as useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CardsMain = dynamic(() => import("@/app/ui/home/servidor/CardsMain"), {
  ssr: false, // Esto asegura que se renderice solo en el cliente
});

const CardsMainClientWrapper = () => {
  const queryParams = useSearchParams();
  // const [params, setParams] = useState<string[]>([]);

  useEffect(() => {
   
  }, []);
  console.log(queryParams);

  return (
    <></>
  )
};

export default CardsMainClientWrapper;
