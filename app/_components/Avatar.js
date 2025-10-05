import Image from "next/image";
import { auth } from "../_lib/auth";
import avatar from "../../public/icons/avatar.svg";

export default async function Avatar({ className }) {
  const session = await auth();
  return (
    <div className={`${className} bg-white rounded-full w-[200px] h-[200px] p-[1rem] flex flex-col justify-end items-center m-auto`}>
      <Image
      src={session?.user?.image || avatar}
        alt="coffee-origin-country"
        width="100"
        height="100"
        className="rounded-full"
      />
      <p className="text-primary-950 italic text-center">{session?.user?.name || "Unknown User"}</p>
    </div>
  );
}
