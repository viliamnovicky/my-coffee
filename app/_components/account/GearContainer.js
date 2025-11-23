import Image from "next/image";
import { Button } from "../Buttons";

function GearContainer({ gear }) {
  return (
    <div className="group flex flex-col xl:flex-row p-[2rem] justify-between border-b-2 border-primary-100 w-[98vw] xl:w-[1300px] m-auto hover:bg-primary-100/20">
      <div className="flex justify-left items-start gap-[2rem] w-[100%] m-auto">
        <div className="relative w-[100px] xl:w-[200px] aspect-square">
          <Image
            src={gear.image}
            alt={gear.mark + gear.model + "image"}
            fill
            className="object-cover rounded-full p-2 absolute"
          />
        </div>
        <div className="p-[1rem] text-primary-950">
          <div className="flex">
            <p className="text-[.8rem] xl:text-[1rem] uppercase font-normal bg-primary-100 px-[.5rem] py-[.2rem]">
              {gear.mark + " "}
              <span className=" font-extrabold">{gear.model}</span>
            </p>
          </div>

          <p className="pl-[.5rem] lowercase text-[.8rem] xl:text-[1rem]">{gear.type}</p>
          {gear.steps && <p className="pl-[.5rem] lowercase">{gear.steps} gears</p>}
        </div>
      </div>
      <div>
        <p className="text-[.9rem] xl:text-[1rem] pt-[1rem] text-primary-700 italic text-right">
          {gear.description ? `„${gear.description}”` : `A place for short description`}
        </p>
        <div className="opacity-0 group-hover:opacity-100 flex gap-2 items-end justify-end mt-2">
          <Button className="bg-blue-400 hover:bg-blue-500">Update</Button>
          <Button className="bg-red-400 hover:bg-red-500">Delete</Button>
        </div>
      </div>
    </div>
  );
}

export default GearContainer;
