import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Breadcrumbs = () => {
  return (
    <div className="flex items-center gap-2 my-8 font-body text-rewayGrey max-md:text-sm ">
      <p className="text-rewayBlue">Home</p>
      <FontAwesomeIcon icon={faChevronRight} />
      <p className="text-rewayBlue">Boots</p>
      <FontAwesomeIcon icon={faChevronRight} />
      <p>Dylan Hiker Boots</p>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

export default Breadcrumbs;
