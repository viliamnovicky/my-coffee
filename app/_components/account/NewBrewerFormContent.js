import { useModal } from "@/app/_context/ModalContext";
import { Button } from "../Buttons";
import { Input, Select } from "../Inputs";
import Modal from "../Modal";
import { InfoParagraph } from "../Paragraphs";
import { useNewBrewer } from "@/app/_context/NewBrewerContext";
import { H2 } from "../Headings";
import Picture from "../new-coffee-form/Picture";

function NewBrewerFormContent() {
  const { isOpen, openModal, closeModal } = useModal();
  const { brewer, updateBrewerData, resetBrewerData } = useNewBrewer();

  return (
    <>
      <Button
        onClick={openModal}
        className=" m-auto mt-[1rem] block bg-primary-400 hover:bg-primary-500"
      >
        Add Brewer
      </Button>
      <Modal className="">
        <H2 className="pb-2">New brewer</H2>
        <Picture coffee={brewer} updateCoffeeData={updateBrewerData} />
        <InfoParagraph className="w-full">
          Mark:
          <Input
            type="text"
            label=" "
            value={brewer.mark}
            onChange={(e) => updateBrewerData("mark", e.target.value)}
          />
        </InfoParagraph>
        <InfoParagraph className="w-full">
          Model:
          <Input
            type="text"
            label=" "
            value={brewer.model}
            onChange={(e) => updateBrewerData("model", e.target.value)}
          />
        </InfoParagraph>
        <InfoParagraph className="w-full">
          Type:
          <Select
            type="text"
            label=" "
            value={brewer.type}
            onChange={(e) => updateBrewerData("model", e.target.value)}
          >
            <option value="espresso machine">espresso machine</option>
            <option value="pour over">pour over</option>
            <option value="frenchpress">frenchpress</option>
            <option value="siphoon">siphoon</option>
            <option value="chemex">chemex</option>
            <option value="mokka pot">mokka pot</option>
          </Select>
        </InfoParagraph>
        <InfoParagraph className="w-full">
          <label>description</label>
          <textarea
            className="rounded-md p-2 text-center text-primary-950 "
            placeholder="„Add short description”"
            value={brewer.description}
            onChange={(e) => updateBrewerData("description", e.target.value)}
          ></textarea>
        </InfoParagraph>
        <div className="flex gap-2 pt-4">
          <Button className="bg-blue-400 hover:bg-blue-500">add</Button>
          <Button className="bg-red-400 hover:bg-red-500" onClick={closeModal}>
            cancel
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default NewBrewerFormContent;
