"use client";

import { NewBrewerProvider, useNewBrewer } from "@/app/_context/NewBrewerContext";
import Modal from "../Modal";
import { Button } from "../Buttons";
import { useModal } from "@/app/_context/ModalContext";
import { InfoParagraph } from "../Paragraphs";
import { Input } from "../Inputs";
import NewBrewerFormContent from "./NewBrewerFormContent";

function NewBrewerForm() {
  
  return (
    <NewBrewerProvider>
      <NewBrewerFormContent />
    </NewBrewerProvider>
  );
}

export default NewBrewerForm;
