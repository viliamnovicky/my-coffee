import Image from "next/image";
import Bio from "../../public/icons/bio.png";

function BioIcon() {
  return (
    <div className="relative w-[40px] h-[40px] rounded-full">
      <Image src={Bio} alt="bio-icon" className="absolute" fill />
    </div>
  );
}

export default BioIcon;
