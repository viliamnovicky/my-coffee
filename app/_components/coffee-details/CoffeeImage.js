import Tag from "../Tag";
import Image from "next/image";

function CoffeeImage({coffee}) {
  return (
    <div className="h-[400px] md:w-[900px] w-[100%] relative overflow-hidden flex flex-col justify-center md:items-start items-center">
      {coffee.caffeine && (
        <Tag
          color={coffee.caffeine}
          text={coffee.caffeine}
          addClass="absolute md:left-[18.3rem] md:bottom-[65px] right-[55px] bottom-[120px]"
        />
      )}
      <Image
        src={coffee.image}
        alt={coffee.coffeeName}
        width="400"
        height="400"
        className="object-cover rounded-full p-2"
      />
    </div>
  );
}

export default CoffeeImage;
