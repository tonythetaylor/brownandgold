import React, { useState, useRef, useEffect } from "react";
import ModalData from "./ModalData";
import SimpleMap from "../maps/SimpleMap";

const Modal = ({ isOpen, closeModal, data }) => {
  const modalRef = useRef();

  if (data?.length < 0) return;
  console.log(data);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", closeOnOutsideClick);
    } else {
      document.removeEventListener("mousedown", closeOnOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex left-0 top-0 w-full h-screen items-center justify-center backdrop-blur-md overflow-hidden overflow-y-hidden z-50">
      <div
        ref={modalRef}
        className="container  bg-[#fffff4] p-4 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-[#403122]">{data.name}</h2>
        {/* <ModalForm /> */}
        <ModalData
          name={data.name}
          title={data.title}
          role={data.role}
          email={data.email}
        />
        {/* <SimpleMap /> */}
        <div className="container flex flex-col mt-0 sm:mt-0 items-center dark:text-[#403122] py-2">
          {" "}
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="mt-4 flex justify-end bottom-0">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
