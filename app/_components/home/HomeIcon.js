import Image from "next/image";
import Logo from "../../../public/icons/home-logo.png";
import Home from "../../../public/icons/home.png";

function HomeIcon({ children }) {
  return (
    <div className="xl:w-[600px] w-[100vw] h-[400px] relative m-auto flex flex-col items-center justify-center border-b-2 border-b-primary-200">
      <Image src={Home} fill alt="my-coffee-home-logo" objectFit={'contain'} className="absolute"/>
      {children}
    </div>
  );
}

export default HomeIcon;
