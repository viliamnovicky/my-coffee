import Image from "next/image";

function OriginMap({ coffee }) {
  return (
      <Image
        src={coffee.origin[0] ? `/maps/${coffee.origin[0].toLowerCase()}.svg` : "/maps/world.svg"}
        alt="coffee-origin-country"
        width={0}
        height={0}
        sizes="100vw"
        className="xl:h-auto h-full w-auto xl:max-w-[400px] opacity-30 absolute bottom-0 left-[50%] xl:left-0 translate-x-[-50%] xl:translate-x-0"
      />
  );
}

export default OriginMap;
