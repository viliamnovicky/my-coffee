import Link from "next/link";
import { P } from "../Headings";
import DetailsSecondary from "../coffee-details/DetailsSecondary";

function HomeLogedIn({ user }) {
  return (
    <div className="flex flex-col m-auto p-4 absolute z-10 bottom-[1rem] bg-primary-50/20 rounded-[1rem]">
      
      <div className="flex gap-2 ">
        <Link
          href="/api/auth/signout"
          className="bg-primary-400 hover:bg-primary-600 text-primary-50 p-2 px-4 rounded-[1rem] uppercase w-auto m-auto flex justify-center items-center"
        >
          Sign Out
        </Link>
        <Link
          href="/account"
          className="bg-primary-400 hover:bg-primary-600 text-primary-50 p-2 px-4 rounded-[1rem] uppercase w-auto m-auto flex justify-center items-center"
        >
          Profile
        </Link>
      </div>
    </div>
  );
}

export default HomeLogedIn;
