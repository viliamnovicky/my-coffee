"use client"

import { useModal } from "@/app/_context/ModalContext";
import { Button } from "../Buttons";

function CoffeeOptions({ coffee }) {
    const { isOpen, openModal, closeModal } = useModal();
  return (
    <div className=" w-full h-auto justify-center flex gap-[2rem] m-auto p-[2rem]">
      <Button onClick={openModal} className="bg-blue-400 hover:bg-blue-500">Update</Button>
      <Button onClick={openModal} className="bg-red-400 hover:bg-red-500">Delete</Button>
    </div>
  );
}

export default CoffeeOptions;
