import Image from "next/image";
import Logo from "../../../public/icons/home-logo.png";
import Home from "../../../public/icons/home.png";

function HomeIcon({ children }) {
  return (
    <div className="xl:w-[1000px] w-[98vw] aspect-[16/9] relative m-auto flex flex-col items-center justify-center border-b-2 border-b-primary-200">
  <Image
    src={Home}
    alt="my-coffee-home-logo"
    fill
    className="absolute object-contain"
  />
  {children}
</div>
  );
}

export default HomeIcon;
