import { Input } from "../_components/Inputs";
import { Button } from "../_components/Buttons";
import { signInAction } from "../_lib/actions";

export const metadata = {
  title: "Login"
}

export default function LoginPage() {
  return (
    <form className="mt-[120px]" action={signInAction}>
      <Button className="bg-primary-400 text-primary-50" >Login</Button>;
    </form>
  );
}
