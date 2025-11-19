import { NewGrinderProvider } from "@/app/_context/NewGrinderContext";
import NewGrinderFormContent from "./NewGrinderFormContent";

function NewBrewerForm() {
  return (
    <NewGrinderProvider>
      <NewGrinderFormContent />
    </NewGrinderProvider>
  );
}

export default NewBrewerForm;
