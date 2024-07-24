import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 px-16 bg-[#4A4A4A] text-rewayWhite">
      <div className="col-span-1">
        <p>Account</p>
      </div>
      <div className="col-span-">
        <p>The Company</p>
      </div>
      <div className="col-span-2 flex justify-center">
        <p>Follow us!</p>
      </div>
    </div>
  );
};

export default Footer;
