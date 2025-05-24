
import AccountSidebar from "../_components/account/AccountSidebar";

function page() {
  return (
    <div className="w-screen h-screen xl:pt-[80px] pt-[120px] grid grid-cols-[300px_1fr]">
      <AccountSidebar/>
      <div className="bg-primary-50 w-[100%] h-full"></div>
    </div>
  );
}

export default page;
