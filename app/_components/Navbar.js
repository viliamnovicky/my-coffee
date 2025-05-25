import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";
import { signInAction, signOutAction } from "../_lib/actions";

//import { usePathname } from "next/navigation";

export default async function Navbar() {
  const pathname = "";
  const session = await auth();
  console.log(session);
  return (
    <nav className="bg-primary-50">
      <ul className="flex uppercase gap-[1px] justify-center items-center bg-primary-900">
        <li
          className={`${
            pathname === "/" ? "bg-primary-500 " : "bg-primary-900"
          }  hover:bg-primary-400 px-2 text-md md:text-xl transition-colors `}
        >
          <Link href="/">Home</Link>
        </li>
        {/* <li
          className={`${
            pathname === "/coffees" ? "bg-primary-500 " : "bg-primary-900"
          }  hover:bg-primary-400 px-2 text-md md:text-xl transition-colors`}
        >
          <Link href="/coffees ">All coffee</Link>
        </li> */}
        <li
          className={`${
            pathname === "/my-coffees" ? "bg-primary-500 " : "bg-primary-900"
          }  hover:bg-primary-400 border-l px-2 text-md md:text-xl transition-colors`}
        >
          <Link href="/my-coffees ">My coffee</Link>
        </li>
        {session && (
          <li
            className={`${
              pathname === "/my-coffees" ? "bg-primary-500 " : "bg-primary-900"
            }  hover:bg-primary-400 border-l px-2 text-md md:text-xl transition-colors`}
          >
            <Link href="/account ">Account</Link>
          </li>
        )}
        <li
          className={`${
            pathname === "/account" ? "bg-primary-500 " : "bg-primary-900"
          }  hover:bg-primary-400 border-l px-2 text-md md:text-xl transition-colors`}
        >
          {session ? (
            <form action={signOutAction}><button className="uppercase">Log Out</button></form>
          ) : (
            <form action={signInAction}><button className="uppercase">Log In</button></form>
          )}
        </li>
        {session?.user?.image && (
          <li className="bg-primary-900">
            <Image
              src={session.user.image}
              alt={`${session.user}-avatar}`}
              width="50"
              height="50"
              className="rounded-full p-2"
            />
          </li>
        )}
      </ul>
    </nav>
  );
}
