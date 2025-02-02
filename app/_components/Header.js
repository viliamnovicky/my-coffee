import Logo from "./Logo";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

function Header({ children }) {
  return (
    <header className="h-[6rem] w-full bg-primary-900 flex px-4 py-0 justify-between items-center">
      <Logo />
      <Navbar/>
      {children}
    </header>
  );
}

export default Header;
