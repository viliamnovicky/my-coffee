
import AccountSidebar from "../_components/account/AccountSidebar";
import { auth } from "../_lib/auth";

export default async function page() {
 const session = await auth()
  console.log(session.user)
  return (
    <div className="w-screen h-screen xl:pt-[80px] pt-[120px] grid grid-cols-[300px_1fr]">
      <AccountSidebar/>
      <div className="bg-primary-50 w-[100%] h-full"></div>
    </div>
  );
}
