import Link from "next/link";
import { P } from "../Headings";
import DetailsSecondary from "../coffee-details/DetailsSecondary";
import { signInAction } from "@/app/_lib/actions";

function HomeLogedOut() {
  return (
    <div className=" flex flex-col m-auto">
      <DetailsSecondary className="gap-[4rem] bg-gradient-5 xl:rounded-full xl:rounded-tr-[1rem] xl:rounded-br-[1rem] flex-col p-[4rem]">
        <P className="font-extrabold text-[1.1rem] ">
          Every poorly brewed gram of coffee is a tiny tragedy. But don&apos;t worry, your rescue
          mission starts here! With this page, you can track your perfect settings, save your
          tasting notes, and dial in the ideal cup every single time. Because life&apos;s too short
          for bad coffee.
        </P>{" "}
        <form action={signInAction}>
          <button
            className="bg-primary-400 hover:bg-primary-600 text-primary-50 p-2 px-4 rounded-[1rem] uppercase w-[100px] m-auto flex justify-center items-center"
          >
            Sign In
          </button>
        </form>
      </DetailsSecondary>
    </div>
  );
}

export default HomeLogedOut;
