"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faClose } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Emaillist = () => {
  const [isActive, setIsActive] = useState(true);
  const notify = () =>
    toast.success("Subscription to mailing list succesfull!");

  return (
    <>
      {isActive && (
        <div
          className={`bg-rewayBlue flex flex-col items-center p-4 text-rewayWhite w-full relative`}
        >
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => setIsActive(false)}
            className={`absolute top-4 right-5 cursor-pointer`}
          />

          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <h3 className="uppercase text-[20px] font-suez font-semibold mt-4">
            Sign up to our mailing list!
          </h3>
          <label
            htmlFor="emailList"
            className="uppercase self-start font-body mt-4"
          >
            Email
          </label>
          <input
            type="text"
            placeholder="ENTER EMAIL ADDRESS"
            id="emailList"
            className="p-2 rounded-sm font-semibold w-full"
          />
          <button
            onClick={notify}
            className="bg-rewayWhite text-rewayBlue px-8 py-2 mt-4 font-suez font-semibold uppercase"
          >
            Submit
          </button>
          <ToastContainer theme="light" />
        </div>
      )}
      {!isActive && <div></div>}
    </>
  );
};

export default Emaillist;
