import Image from "next/image";

function GearContainer({ gear }) {
  return (
    <div className="p-[2rem] flex justify-left items-start gap-[2rem] border-b-2 border-primary-100 w-[100%] m-auto">
      <Image
        src={gear.image}
        alt={gear.mark + gear.model + "image"}
        width="200"
        height="200"
        className="object-cover rounded-full p-2"
      />
      <div className="p-[1rem] text-primary-950">
        <div className="flex">
          <p className="uppercase font-normal bg-primary-100 px-[.5rem] py-[.2rem]">
            {gear.mark + " "}
            <span className=" font-extrabold">
              {gear.model}
            </span>
          </p>
        </div>

        <p className="pl-[.5rem] lowercase">{gear.type}</p>
        {gear.steps && <p className="pl-[.5rem] lowercase">{gear.steps} gears</p>}
      </div>
    </div>
  );
}

export default GearContainer;
