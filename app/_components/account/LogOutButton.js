import { signOutAction } from "@/app/_lib/actions";

function LogOutButton() {
  return (
    <form action={signOutAction}>
      <button className="uppercase text-primary-950 hover:text-primary-50 bg-primary-50 hover:bg-primary-400 w-[90%] rounded-[1rem] m-auto h-auto flex justify-center items-center p-[1rem]">
        Sign Out
      </button>
    </form>
  );
}

export default LogOutButton;
