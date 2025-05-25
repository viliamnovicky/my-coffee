import Image from "next/image";
import Logo from "../../../public/icons/home-logo.png";

function HomeIcon() {
  return (
    <div className="xl:mt-[80px] mt-[120px] relative m-auto w-full flex justify-center">
      <Image src={Logo} width="400" height="400" alt="my-coffee-home-logo" />
    </div>
  );
}

export default HomeIcon;
