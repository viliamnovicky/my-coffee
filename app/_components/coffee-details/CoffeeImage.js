import Tag from "../Tag";
import Image from "next/image";

function CoffeeImage({ coffee }) {
  const defaultImage = "https://firebasestorage.googleapis.com/v0/b/my-home-d1851.appspot.com/o/coffee%2Fcoffee_pouch_matt_black.png?alt=media&token=0d8fcb20-ccf0-4440-a018-2ee6522215fd"
  return (
    <div className="xl:h-[400px] h-[100%] w-[100%] relative overflow-hidden flex flex-col justify-center xl:items-start items-center">
      <Tag
        color={coffee.caffeine === "" ? "gray" : coffee.caffeine}
        text={coffee.caffeine === "" ? "no info" : coffee.caffeine}
        addClass="absolute xl:left-[18.3rem] xl:bottom-[65px] right-[50%] bottom-[0px] !w-[120px] translate-x-[50%] xl:translate-x-0"
      />

      <Image
        src={coffee.image ? coffee.image : defaultImage}
        alt={coffee.coffeeName}
        width="400"
        height="400"
        className="object-cover rounded-full p-2"
      />
    </div>
  );
}

export default CoffeeImage;
