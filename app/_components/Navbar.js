import { auth } from "../_lib/auth";
import Image from "next/image";
import { signInAction, signOutAction } from "../_lib/actions";
import NavbarLink from "./NavbarLink";

export default async function Navbar() {
  const session = await auth();
  
  return (
    <nav className="bg-primary-50">
      <ul className="text-primary-50 flex uppercase gap-[1px] justify-center items-center bg-primary-900">
        <NavbarLink path="/">Home</NavbarLink>

        {session && (
          <NavbarLink path="/coffees" className="border-l">
            My coffee
          </NavbarLink>
        )}
        {session && (
          <NavbarLink path="/account" className="border-l">
            Account
          </NavbarLink>
        )}
        {/* <li className="bg-primary-900 hover:bg-primary-400 px-2 text-md md:text-xl transition-colors border-l">
          {session ? ( 
            <form action={signOutAction}>
              <button className="uppercase">Log Out</button>
            </form>
          ) : (
            <form action={signInAction}>
              <button className="uppercase">Log In</button>
            </form>
          )}
        </li> */}
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
