"use client";

import { useModal } from "@/app/_context/ModalContext";
import { Button } from "../Buttons";
import { Input, Select } from "../Inputs";
import Modal from "../Modal";
import { InfoParagraph } from "../Paragraphs";
import { useNewBrewer } from "@/app/_context/NewBrewerContext";
import { H2 } from "../Headings";
import Picture from "../new-coffee-form/Picture";
import { addBrewerAction } from "@/app/_lib/actions";

function NewBrewerFormContent() {
  const { openModal, closeModal } = useModal();
  const { brewer, updateBrewerData, resetBrewerData } = useNewBrewer();

  const defaultImage =
    "https://firebasestorage.googleapis.com/v0/b/my-home-d1851.appspot.com/o/coffee%2Funknown-brewer.png?alt=media&token=79db463e-d954-4aa5-9eea-242be8b7df7d";

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (brewer.image instanceof Blob) {
      formData.set("image", brewer.image);
    }

    await addBrewerAction(formData);
    resetBrewerData();
    closeModal();
  }

  return (
    <>
      <Button onClick={() => openModal("newBrewer")} className="m-auto mt-4 block bg-primary-400 hover:bg-primary-500">
        Add Brewer
      </Button>

      <Modal id="newBrewer">
        <H2 className="pb-2">New Brewer</H2>
        <form onSubmit={handleSubmit}>
          <Picture image={brewer.image} coffee={brewer} updateData={updateBrewerData} />

          <InfoParagraph className="w-full">
            Mark:
            <Input
              type="text"
              label=" "
              value={brewer.mark}
              onChange={(e) => updateBrewerData("mark", e.target.value)}
              name="mark"
            />
          </InfoParagraph>

          <InfoParagraph className="w-full">
            Model:
            <Input
              type="text"
              label=" "
              value={brewer.model}
              onChange={(e) => updateBrewerData("model", e.target.value)}
              name="model"
            />
          </InfoParagraph>

          <InfoParagraph className="w-full">
            Type:
            <Select
              value={brewer.type}
              onChange={(e) => updateBrewerData("type", e.target.value)}
              name="type"
            >
              <option value="espresso machine">espresso machine</option>
              <option value="pour over">pour over</option>
              <option value="frenchpress">frenchpress</option>
              <option value="siphoon">siphoon</option> <option value="chemex">chemex</option>
              <option value="mokka pot">mokka pot</option>
            </Select>
          </InfoParagraph>

          <InfoParagraph className="w-full">
            <label>Description</label>
            <textarea
              className="rounded-md p-2 text-center text-primary-950"
              placeholder="Add short description"
              value={brewer.description}
              onChange={(e) => updateBrewerData("description", e.target.value)}
              name="description"
            />
          </InfoParagraph>
          <input type="hidden" name="image" value={defaultImage} />
          <div className="flex gap-2 pt-4 items-center justify-center">
            <Button type="submit" className="bg-blue-400 hover:bg-blue-500">
              Add
            </Button>
            <Button type="button" onClick={closeModal} className="bg-red-400 hover:bg-red-500">
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default NewBrewerFormContent;
