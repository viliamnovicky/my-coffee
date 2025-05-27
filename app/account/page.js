
import AccountSidebar from "../_components/account/AccountSidebar";
import UpdateAccountForm from "../_components/account/UpdateAccountForm";
import { H2 } from "../_components/Headings";
import { auth } from "../_lib/auth";
import { getUser } from "../_lib/data-service";

export const metadata = {
  title: "Profile"
}

export default async function page() {
 const session = await auth()
 const user = await getUser(session.user.email)
  
  return (
    <H2>
      Welcome {user.fullName}
      <UpdateAccountForm user={user}/>
    </H2>
  );
}
