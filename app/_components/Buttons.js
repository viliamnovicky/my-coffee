import Link from "next/link";
import { Children } from "react";

export function AddCoffeeButton({href}) {
  return (
    <Link
      className="text-primary-50 z-40 bg-primary-400 hover:bg-primary-600 flex items-center justify-center w-[35px] h-[35px] text-2xl fixed right-3 xl:top-[90px] top-[63px] rounded-full"
      href={href}
    >
      +
    </Link>
  );
}

export function Button({ children, className, onClick }) {
  return (
    <button onClick={onClick} className={`${className} text-primary-50 rounded-[1rem] px-4 py-1`}>
      {children}
    </button>
  );
}

export function FilterButton({ children, className, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-[1rem] xl:px-4 px-2 py-2 flex items-center justify-center gap-1 text-[.8rem] xl:text-[1rem] ${
        isActive ? "bg-primary-900 text-primary-50" : "bg-primary-100 text-primary-950"
      } hover:bg-primary-50 hover:text-primary-950`}
    >
      {children}
    </button>
  );
}
