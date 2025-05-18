import Logo from "./Logo";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

function Header({ children }) {
  return (
    <header className="z-10 w-full bg-primary-900 flex flex-col md:flex-row gap-2 md:gap-0 px-4 py-4 justify-between items-center fixed top-0">
      <Logo />
      <Navbar/>
      {children}
    </header>
  );
}

export default Header;
