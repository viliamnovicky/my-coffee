"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarLink({children, path, className, onClick}) {
    const pathname = usePathname();
    return (
        <li
          className={`${className} ${
            pathname === path ? "bg-primary-600 xl:bg-primary-600" : "bg-primary-400 xl:bg-primary-900"
          }  hover:bg-primary-400 px-2 xl:py-0 py-4 text-md md:text-xl transition-colors text-center uppercase`}
        >
          <Link href={path} onClick={onClick} className="w-full">{children}</Link>
        </li>
    )
}

export default NavbarLink
