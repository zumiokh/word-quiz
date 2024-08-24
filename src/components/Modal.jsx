import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

export const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const closeModal = () => setOpenName("");
  const openModal = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, modalName }) {
  const { openModal } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => openModal(modalName) });
}

function Window({ children, name, title = "" }) {
  const { openName, closeModal } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <div
      id="modal-overlay"
      className="fixed inset-0 w-screen h-screen bg-[#00000060] backdrop-blur-md flex justify-center items-center"
    >
      <div id={`modal-${name}`} className="bg-stone-200 w-[90%] p-5 md:w-[50%]">
        <div className="flex justify-center items-center mb-3">
          <div className="me-auto text-4xl font-bold">{title}</div>
          <div
            onClick={closeModal}
            className="border-2 border-stone-900 p-2 rounded-lg flex justify-center items-center transition-all cursor-pointer hover:bg-rose-500"
          >
            <i className="fa fa-x"></i>
          </div>
        </div>
        <div className="w-full max-h-[400px] overflow-auto no-scrollbar">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
