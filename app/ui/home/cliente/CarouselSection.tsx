"use client";

import { useState } from "react";
import { CarouselSectionProps, PaginationDotsProps } from "@/app/lib/Interfaces";
import Carousel from "./Carousel";

function PaginationDots({
  currentPage,
  totalPages,
  onPageClick,
}: PaginationDotsProps) {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageClick(index)}
          className={`h-2 w-2 mx-1 rounded-full ${
            currentPage === index ? "bg-principalColor1" : "bg-principalColor2 border border-black"
          }`}
        />
      ))}
    </div>
  );
}

export default function CarouselSection({
  vinos,
  variedad,
}: CarouselSectionProps) {
  const [page, setPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(vinos.length / itemsPerPage);

  const handleNextPage = () =>
    setPage((prevPage) => (prevPage + 1) % totalPages);
  const handlePrevPage = () =>
    setPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  const handlePageClick = (index: number) => setPage(index);

  return (
    <section className="mx-1 pb-[3%] items-center overflow-x-auto m-0 scroll-smooth">
      <h2 className="my-3 flex items-center justify-center font-poppins text-[2em] font-bold leading-10 text-principalColor1 uppercase">
        {variedad}
      </h2>
      <Carousel
        vinos={vinos}
        page={page}
        itemsPerPage={itemsPerPage}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
      <PaginationDots
        currentPage={page}
        totalPages={totalPages}
        onPageClick={handlePageClick}
      />
    </section>
  );
}