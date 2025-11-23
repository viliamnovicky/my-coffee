"use client";

import { useModal } from "@/app/_context/ModalContext";
import { Button } from "../Buttons";
import { Input, Select } from "../Inputs";
import Modal from "../Modal";
import { InfoParagraph } from "../Paragraphs";
import { useNewGrinder } from "@/app/_context/NewGrinderContext";
import { H2 } from "../Headings";
import Picture from "../new-coffee-form/Picture";
import { addGrinderAction } from "@/app/_lib/actions";
import CustomSettings from "./CustomSettingsUser";

function NewGrinderFormContent() {
  const { openModal, closeModal } = useModal();
  const { grinder, updateGrinderData, resetGrinderData } = useNewGrinder();

  const defaultImage =
    "https://firebasestorage.googleapis.com/v0/b/my-home-d1851.appspot.com/o/coffee%2Funknown-brewer.png?alt=media&token=79db463e-d954-4aa5-9eea-242be8b7df7d";

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Add image if Blob
    if (grinder.image instanceof Blob) {
      formData.set("image", grinder.image);
    }

    // IMPORTANT: add customSettings manually
    formData.set("customSettings", JSON.stringify(grinder.customSettings));

    await addGrinderAction(formData);
    resetGrinderData();
    closeModal();
  }

  return (
    <>
      <Button
        onClick={() => openModal("newGrinder")}
        className="m-auto mt-4 block bg-primary-400 hover:bg-primary-500"
      >
        Add Grinder
      </Button>

      <Modal id="newGrinder">
        <H2 className="pb-2">New Grinder</H2>
        <form onSubmit={handleSubmit}>
          <Picture image={grinder.image} data={grinder} updateData={updateGrinderData} />

          <InfoParagraph className="w-full">
            Mark:
            <Input
              type="text"
              label=" "
              value={grinder.mark}
              onChange={(e) => updateGrinderData("mark", e.target.value)}
              name="mark"
            />
          </InfoParagraph>

          <InfoParagraph className="w-full">
            Model:
            <Input
              type="text"
              label=" "
              value={grinder.model}
              onChange={(e) => updateGrinderData("model", e.target.value)}
              name="model"
            />
          </InfoParagraph>
          <InfoParagraph className="w-full">
            Gears:
            <Input
              type="text"
              label=" "
              value={grinder.steps}
              onChange={(e) => updateGrinderData("steps", e.target.value)}
              name="steps"
            />
          </InfoParagraph>

          <InfoParagraph className="w-full">
            Type:
            <Select
              value={grinder.type}
              onChange={(e) => updateGrinderData("type", e.target.value)}
              name="type"
            >
              <option value="automatic">automatic</option>
              <option value="manual">manual</option>
            </Select>
          </InfoParagraph>

          <InfoParagraph className="w-full">
            <label>Description:</label>
            <textarea
              className="rounded-md p-2 text-center text-primary-950"
              placeholder="Add short description"
              value={grinder.description}
              onChange={(e) => updateGrinderData("description", e.target.value)}
              name="description"
            />
          </InfoParagraph>
          <H2 className="bg-primary-50 rounded-none uppercase">custom settings</H2>
          <CustomSettings data={grinder} updateData={updateGrinderData} />
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

export default NewGrinderFormContent;
