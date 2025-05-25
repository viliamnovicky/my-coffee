import NewCoffeeForm from "../_components/NewCoffeeForm";
import { NewCoffeeProvider } from "../_context/NewCoffeeContext";
import { auth } from "../_lib/auth";

async function page() {
  const session = await auth()
  const user = session?.user?.userId
  return (
    <div>
      <NewCoffeeProvider>
        <NewCoffeeForm user={user}/>
      </NewCoffeeProvider>
    </div>
  );
}

export default page;
