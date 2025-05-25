import HomeIcon from "./_components/home/HomeIcon";
import HomeLogedIn from "./_components/home/HomeLogedIn";
import HomeLogedOut from "./_components/home/HomeLogedOut";
import { auth } from "./_lib/auth";

export const metadata = {
  title: "Home | My Coffee",
};

export default async function Home() {
  const session = await auth();
  return (
    <div className="w-full flex flex-col justify-start">
      <HomeIcon/>
      {session ? <HomeLogedIn user={session.user.name}/> : <HomeLogedOut/>}
    </div>
  );
}
