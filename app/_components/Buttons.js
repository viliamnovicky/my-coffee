import Link from "next/link";
import { Children } from "react";

export function AddCoffeeButton() {
  return <Link className="z-40 bg-primary-400 hover:bg-primary-600 flex items-center justify-center w-[35px] h-[35px] text-2xl fixed right-3 md:top-[90px] top-[95px] rounded-full" href="/new-coffee">+</Link>;
}

export function Button({children, className, onClick}) {
  return <button onClick={onClick} className={`${className} text-primary-50 rounded-[1rem] px-[.8rem] py-[.3rem]`}>
    {children}
  </button>
}