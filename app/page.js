import { H2, P } from "./_components/Headings";
import HomeIcon from "./_components/home/HomeIcon";
import HomeIconPoor from "./_components/home/HomeIconPoor";
import HomeLogedIn from "./_components/home/HomeLogedIn";
import HomeLogedOut from "./_components/home/HomeLogedOut";
import { auth } from "./_lib/auth";
import Image from "next/image";
import NotesImage from "../public/icons/home-notes.png";
import { Suspense } from "react";
import LoadingCoffees from "./_components/_spinners/LoadingCoffees";

export const metadata = {
  title: "Home | My Coffee",
};

export default async function Home() {
  const session = await auth();

  return (
    <div className="w-full flex flex-col justify-start mt-[12vh] xl:mt-[8vh] xl:h-[92vh] h-[88vh] overflow-y-auto">
      <Suspense fallback={<LoadingCoffees/>}>
        <H2 className="uppercase bg-primary-400 !text-primary-50 p-2 rounded-none">
          {session ? `Welcome back ${session.user.name}` : `Sign in to enter the world of coffee`}
        </H2>
        <div className="flex w-full gap-2 p-2 items-end justify-center xl:mt-[2rem] flex-col xl:flex-row">
          <HomeIconPoor />
          <P className="m-auto xl:m-0 relative xl:bottom-[-2rem] font-extrabold text-[1.1rem] xl:max-w-[600px] w-[98%] bg-primary-100 p-2 rounded-[1rem]">
            But don&apos;t worry, your rescue mission starts here! With this page, you can track
            your perfect settings, save your tasting notes, and dial in the ideal cup every single
            time. Because life&apos;s too short for bad coffee.
          </P>
        </div>
        <div className="flex w-full gap-2 p-2 items-end justify-center xl:mt-[2rem] flex-col xl:flex-row">
          <div className=" rounded-[1rem] relative w-[96vw] xl:w-[450px] h-[64vw] xl:h-[300px] ratio-square">
            <Image
              className="absolute p-[2rem]"
              alt="home-notes-image"
              fill
              src={NotesImage}
            ></Image>
          </div>
          <P className="m-auto xl:m-0 relative xl:bottom-[-2rem] font-extrabold text-[1.1rem] xl:max-w-[600px] w-[98%] bg-primary-100 p-2 rounded-[1rem]">
            save your tasting notes,
          </P>
        </div>

        <HomeIcon>{session ? <HomeLogedIn user={session.user.name} /> : <HomeLogedOut />}</HomeIcon>
      </Suspense>
    </div>
  );
}
