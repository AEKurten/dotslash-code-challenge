import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faClose } from "@fortawesome/free-solid-svg-icons";

const Emaillist = () => {
  return (
    <div className="bg-rewayBlue flex flex-col items-center p-4 text-rewayWhite">
      <FontAwesomeIcon icon={faEnvelope} size="2x" />
      <h3 className="uppercase text-[20px] font-suez font-semibold">
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
      <button className="bg-rewayWhite text-rewayBlue px-8 py-2 mt-4 font-suez font-semibold uppercase">
        Submit
      </button>
    </div>
  );
};

export default Emaillist;
