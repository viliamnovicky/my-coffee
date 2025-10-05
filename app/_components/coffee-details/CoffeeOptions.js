"use client";

import { useModal } from "@/app/_context/ModalContext";
import { Button } from "../Buttons";
import Modal from "../Modal";
import { H2, P } from "../Headings";
import { deleteCoffeeAction } from "@/app/_lib/actions";
import Image from "next/image";
import Link from "next/link";

function CoffeeOptions({ coffee }) {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <div className=" w-full h-auto justify-center flex gap-[2rem] m-auto p-[2rem]">
        <Link
          href={`/update-coffee/${coffee.slug}`}
          className="bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center py-1 px-4"
        >
          Update
        </Link>
        <Button onClick={openModal} className="bg-red-400 hover:bg-red-500">
          Delete
        </Button>
      </div>
      <Modal>
        <P className="pt-[3rem]">{`You are about to delete`}</P>
        <div className="m-auto my-[1rem] w-[200px] rounded-full overflow-hidden p-[2rem] aspect-square relative">
          <Image fill className="absolute" src={coffee.image} alt={coffee.coffeeName} />
        </div>
        <P className="uppercase font-bold pb">{`${coffee.roasteryName} ${coffee.coffeeName}`}</P>
        <div className="m-auto flex gap-4 py-[1rem]">
          <Button
            onClick={async () => {
              closeModal(); 
              await deleteCoffeeAction(coffee);
            }}
            className="bg-red-400 hover:bg-red-500 px-4"
          >
            Delete
          </Button>
          <Button onClick={closeModal} className="bg-primary-400 hover:bg-primary-500">
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default CoffeeOptions;
