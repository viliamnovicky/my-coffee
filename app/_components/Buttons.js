import Link from "next/link";

export function AddCoffeeButton() {
  return <Link className="bg-primary-400 hover:bg-primary-600 flex items-center justify-center w-[50px] h-[50px] text-2xl absolute right-3 top-3 rounded-full" href="/new-coffee">+</Link>;
}
