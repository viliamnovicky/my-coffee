import Tag from "../Tag";
import Image from "next/image";

function CoffeeImage({ coffee }) {
  return (
    <div className="xl:h-[400px] h-[100%] xl:w-[900px] w-[100%] relative overflow-hidden flex flex-col justify-center xl:items-start items-center">
      <Tag
        color={coffee.caffeine === 0 ? "gray" : coffee.caffeine}
        text={coffee.caffeine === 0 ? "no info" : coffee.caffeine}
        addClass="absolute xl:left-[18.3rem] xl:bottom-[65px] right-[55px] bottom-[120px]"
      />

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
