import Link from "next/link";
import { P } from "../Headings";
import DetailsSecondary from "../coffee-details/DetailsSecondary";
import { signInAction } from "@/app/_lib/actions";

function HomeLogedOut() {
  return (
    <div className="flex flex-col m-auto p-4 absolute z-10 bottom-[1rem] bg-primary-50/20 rounded-[1rem]">
      
      <form action={signInAction}>
        <button className="bg-primary-400 hover:bg-primary-600 text-primary-50 p-2 px-4 rounded-[1rem] uppercase w-[100px] m-auto flex justify-center items-center">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default HomeLogedOut;
