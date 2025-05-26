"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarLink({children, path, className}) {
    const pathname = usePathname();
    return (
        <li
          className={`${className} ${
            pathname === path ? "bg-primary-500 " : "bg-primary-900"
          }  hover:bg-primary-400 px-2 text-md md:text-xl transition-colors `}
        >
          <Link href={path}>{children}</Link>
        </li>
    )
}

export default NavbarLink
