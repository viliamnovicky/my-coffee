import NewCoffeeForm from "../_components/NewCoffeeForm";
import { NewCoffeeProvider } from "../_context/NewCoffeeContext";

function page() {
  return (
    <div>
      <NewCoffeeProvider>
        <NewCoffeeForm/>
      </NewCoffeeProvider>
    </div>
  );
}

export default page;
