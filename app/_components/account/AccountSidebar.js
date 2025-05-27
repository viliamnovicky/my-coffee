import Avatar from "../Avatar";
import avatar from "../../../public/icons/avatar.svg";
import AccountLink from "./AccountLink";
import LogOutButton from "./LogOutButton";

function AccountSidebar() {
  return (
    <div className="h-full bg-primary-100 flex gap-[1px] flex-col">
      <div className="mb-[1rem] pt-[2rem]  w-[100%] h-auto flex justify-start flex-col items-center">
        <Avatar src={avatar} />
      </div>
      <div className="flex gap-[5px] flex-col">
        <AccountLink href="/account">Profile</AccountLink>
        <AccountLink href="/account/gear">My gear</AccountLink>
        <AccountLink href="">Password</AccountLink>
        <LogOutButton/>
      </div>
    </div>
  );
}

export default AccountSidebar;
