import { auth } from "../_lib/auth";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav >
      {/* Desktop version */}
      <div className="hidden xl:block">
        <NavbarDesktop session={session} />
      </div>

      {/* Mobile version */}
      <div className="block xl:hidden">
        <NavbarMobile session={session} />
      </div>
    </nav>
  );
}

