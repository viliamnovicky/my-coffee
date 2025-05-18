import Link from "next/link";

export function AddCoffeeButton() {
  return <Link className="z-10 bg-primary-400 hover:bg-primary-600 flex items-center justify-center w-[50px] h-[50px] text-2xl fixed right-3 top-[90px] rounded-full" href="/new-coffee">+</Link>;
}
