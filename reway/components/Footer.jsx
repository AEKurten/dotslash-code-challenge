import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 px-16 bg-[#4A4A4A] text-rewayWhite mt-16">
      <div className="col-span-1">
        <p className="font-semibold">Account</p>
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
