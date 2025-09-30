import Logo from "./Logo";
import Navbar from "./Navbar";

function Header({ children }) {

  return (
    <header className="h-[8vh] z-40 w-full bg-primary-900 flex flex-col xl:flex-row gap-2 xl:gap-0 px-4 py-4 justify-between items-center fixed top-0">
      <Logo />
      <Navbar />
      {children}
    </header>
  );
}

export default Header;
