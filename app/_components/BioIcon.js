import Image from "next/image";

function BioIcon({ className, src }) {
  return (
    <div className={`${className} relative w-[40px]  rounded-full`}>
      <Image src={src} alt="bio-icon" className={` absolute`} fill />
    </div>
  );
}

export default BioIcon;
