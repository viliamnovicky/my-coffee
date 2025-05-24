import Image from "next/image";

function Avatar({ src }) {
  return (
    <div className="bg-primary-50 rounded-full w-[200px] h-[200px] p-[1rem] flex flex-col justify-end items-center">
      <Image
        src={src}
        alt="coffee-origin-country"
        width="100"
        height="100"
        className="rounded-full"
      />
      <p className="text-primary-950 italic text-center">Viliam Novický</p>
    </div>
  );
}

export default Avatar;
