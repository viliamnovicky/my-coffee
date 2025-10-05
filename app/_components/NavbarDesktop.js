import Image from "next/image";
import NavbarLink from "./NavbarLink";

export default function NavbarDesktop({ session }) {
  return (
    <ul className="text-primary-50 flex uppercase gap-[1px] justify-center items-center bg-primary-900">
      <NavbarLink path="/">Home</NavbarLink>
      <NavbarLink path="/coffees" className="border-l">Coffee</NavbarLink>

      {session && (
        <NavbarLink path="/my-coffee" className="border-l">
          My coffee
        </NavbarLink>
      )}
      {session && (
        <NavbarLink path="/account" className="border-l">
          Account
        </NavbarLink>
      )}

      {session?.user?.image && (
        <li className="bg-primary-900">
          <Image
            src={session.user.image}
            alt="User avatar"
            width={50}
            height={50}
            className="rounded-full p-2"
          />
        </li>
      )}
    </ul>
  );
}
