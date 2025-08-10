import { H2, P } from "./_components/Headings";
import HomeIcon from "./_components/home/HomeIcon";
import HomeIconPoor from "./_components/home/HomeIconPoor";
import HomeLogedIn from "./_components/home/HomeLogedIn";
import HomeLogedOut from "./_components/home/HomeLogedOut";
import { auth } from "./_lib/auth";

export const metadata = {
  title: "Home | My Coffee",
};

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <div className="w-full flex flex-col justify-start mt-[9rem] xl:mt-[7rem]">
      <H2 className="uppercase">
        {session ? `Welcome back ${session.user.name}` : `Sign in to enter the world of coffee`}
      </H2>
      <div className="flex w-full gap-2 p-2 items-end justify-center mt-[2rem] flex-col xl:flex-row">
        <HomeIconPoor />
        <P className="relative bottom-[-2rem] font-extrabold text-[1.1rem] max-w-[600px] bg-primary-100 p-2 rounded-[1rem]">
          But don&apos;t worry, your rescue mission starts here! With this page, you can track your
          perfect settings, save your tasting notes, and dial in the ideal cup every single time.
          Because life&apos;s too short for bad coffee.
        </P>
      </div>
      <HomeIcon>{session ? <HomeLogedIn user={session.user.name} /> : <HomeLogedOut />}</HomeIcon>
    </div>
  );
}
