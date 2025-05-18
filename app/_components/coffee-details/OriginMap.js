import Image from "next/image";

function OriginMap({ coffee }) {
  return (
    <div className="relative">
      <Image
        src={`/maps/${coffee.origin[0]}.svg`}
        alt="coffee-origin-country"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-auto max-w-[400px] opacity-30 absolute  bottom-0"
      />
    </div>
  );
}

export default OriginMap;
