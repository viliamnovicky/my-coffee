"use client";

import { Button } from "./Buttons";
import { MdOutlineFirstPage, MdOutlineLastPage } from "react-icons/md";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="m-auto w-screen flex items-center justify-center gap-2 mt-[1vh]">
      {/* First */}
      <Button
        className="bg-primary-300 hover:bg-primary-950"
        onClick={() => onPageChange(1)}
        disabled={page === 1}
      >
        <MdOutlineFirstPage />
      </Button>

      {/* Previous */}
      <Button
        className="bg-primary-200 hover:bg-primary-950 mr-4"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        <GrFormPrevious />
      </Button>

      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, i) => (
        <Button
          key={i}
          className={
            page === i + 1
              ? "bg-primary-950 !w-[35px] !h-[35px] !rounded-full flex items-center justify-center" 
              : "bg-primary-100 text-primary-950 hover:bg-primary-950 hover:text-primary-50 !w-[35px] !h-[35px] !rounded-full flex items-center justify-center"
          }
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </Button>
      ))}

      {/* Next */}
      <Button
        className="bg-primary-200 hover:bg-primary-950 ml-4"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        <GrFormNext />
      </Button>

      {/* Last */}
      <Button
        className="bg-primary-300 hover:bg-primary-950"
        onClick={() => onPageChange(totalPages)}
        disabled={page === totalPages}
      >
        <MdOutlineLastPage />
      </Button>
    </div>
  );
}

