"use client";

import { useModal } from "@/app/_context/ModalContext";
import { Button } from "../Buttons";
import Modal from "../Modal";
import { H2 } from "../Headings";
import { deleteCoffeeAction } from "@/app/_lib/actions";

function CoffeeOptions({ coffee }) {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <div className=" w-full h-auto justify-center flex gap-[2rem] m-auto p-[2rem]">
        <Button className="bg-blue-400 hover:bg-blue-500">
          Update
        </Button>
        <Button onClick={openModal} className="bg-red-400 hover:bg-red-500">
          Delete
        </Button>
      </div>
      <Modal>
            <H2 className="pt-[3rem]">Are you sure?</H2>
            <p>{coffee.slug}</p>
        <div className="m-auto flex gap-4">
          <Button onClick={() => deleteCoffeeAction(coffee)} className="bg-red-400 hover:bg-red-500">Delete</Button>
          <Button onClick={closeModal} className="bg-primary-400 hover:bg-primary-500">Cancel</Button>
        </div>
      </Modal>
    </>
  );
}

export default CoffeeOptions;
