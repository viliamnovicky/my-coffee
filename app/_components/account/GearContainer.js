import Image from "next/image";

function GearContainer({ gear }) {
  return (
    <div className="p-[2rem] flex justify-left items-start gap-[2rem] border-b-2 border-primary-100 w-[80%] m-auto">
      <Image
        src={gear.image}
        alt={gear.mark + gear.type + "image"}
        width="200"
        height="200"
        className="object-cover rounded-full p-2"
      />
      <div className="p-[1rem] text-primary-950">
        <div className="flex">
          <p className="uppercase font-normal bg-primary-100 pl-[1rem] pr-[.5rem] py-[.2rem]">{gear.mark}</p>
          <p className="uppercase font-extrabold pr-[1rem] py-[.2rem] bg-primary-100">{gear.model}</p>
        </div>

        <p>{gear.type}</p>
      </div>
    </div>
  );
}

export default GearContainer;
