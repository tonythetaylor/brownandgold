import React, { useState, useRef, useEffect } from "react";
import HeroModal from "./HeroModal";
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
      <div ref={modalRef} className="container h-3/4 bg-[#fffff4] p-4 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold mb-4 text-[#403122]">{data.Name}</h2>
        {/* <ModalForm /> */}
        {/* <>
          <div>{data.Region}</div>
          <div>{data.Email}</div>

          <div>{data.Chapter_Type}</div>

          <div>{data.ChapterDesignation}</div>
        </> */}
        <HeroModal  name={data.name} region={data.Region} email={data.Email} type={data.Chapter_Type} designation={data.ChapterDesignation} />
        <SimpleMap />
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
