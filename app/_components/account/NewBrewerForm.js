"use client";

import { NewBrewerProvider } from "@/app/_context/NewBrewerContext";

import NewBrewerFormContent from "./NewBrewerFormContent";

function NewBrewerForm() {
  
  return (
    <NewBrewerProvider>
      <NewBrewerFormContent />
    </NewBrewerProvider>
  );
}

export default NewBrewerForm;
