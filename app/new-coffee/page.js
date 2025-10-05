import NewCoffeeForm from "../_components/NewCoffeeForm";
import { NewCoffeeProvider } from "../_context/NewCoffeeContext";
import { auth } from "../_lib/auth";
import { getUser } from "../_lib/data-service";

async function page() {
  const session = await auth()
  const user = session?.user?.userId
  const userData = await getUser(user)
  return (
    <div>
      <NewCoffeeProvider>
        <NewCoffeeForm user={userData}/>
      </NewCoffeeProvider>
    </div>
  );
}

export default page;
