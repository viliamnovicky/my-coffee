"use client";

import { ModalProvider, useModal } from "../_context/ModalContext";
import { Button } from "./Buttons";

function Modal({ children }) {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      {isOpen && (
        <div className="backdrop-blur-[2px] fixed z-50 top-0 left-0 bg-black/50 w-[100vw] h-[100vh]">
          <div className="p-[1rem] flex flex-col justify-center items-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] xl:min-w-[600px] min-w-[90vw] min-h-[200px] bg-white rounded-[1rem]">
            <Button
              onClick={closeModal}
              className="w-[35px] h-[35px] bg-primary-100 hover:bg-primary-200 text-primary-950 absolute top-[1rem] right-[1rem] rounded-full"
            >
              ×
            </Button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
