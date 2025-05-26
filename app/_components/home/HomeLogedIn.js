import Link from "next/link";
import { P } from "../Headings";
import DetailsSecondary from "../coffee-details/DetailsSecondary";

function HomeLogedIn({ user }) {
  return (
    <div className="flex flex-col m-auto">
      <DetailsSecondary className="gap-[4rem] bg-gradient-5 xl:rounded-full xl:rounded-tr-[1rem] xl:rounded-br-[1rem] flex-col p-[4rem]">
        <P className="font-extrabold text-[1.1rem] ">Welcome back {user}</P>{" "}
        <div className="flex gap-2">
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
      </DetailsSecondary>
    </div>
  );
}

export default HomeLogedIn;
