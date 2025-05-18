import Link from "next/link";

export function AddCoffeeButton() {
  return <Link className="z-10 bg-primary-400 hover:bg-primary-600 flex items-center justify-center w-[35px] h-[35px] text-2xl fixed right-3 md:top-[90px] top-[95px] rounded-full" href="/new-coffee">+</Link>;
}
