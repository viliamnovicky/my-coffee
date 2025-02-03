"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-primary-50">
      <ul className="flex uppercase gap-[1px]">
        <li
          className={`${
            pathname === "/" ? "bg-primary-500 " : "bg-primary-900"
          }  hover:bg-primary-400 px-2 text-md md:text-xl transition-colors`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`${
            pathname === "/coffees" ? "bg-primary-500 " : "bg-primary-900"
          }  hover:bg-primary-400 px-2 text-md md:text-xl transition-colors`}
        >
          <Link href="/coffees ">All coffee</Link>
        </li>
        {/* <li
          className={`${
            pathname === "/profile" ? "bg-primary-500 font-medium" : "font-light"
          } bg-primary-900 hover:bg-primary-400 px-2 text-xl transition-colors`}
        >
          <Link href="/">profile</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
