import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chip = ({
  icon,
  bgColor,
  text,
  textColor,
  topPos,
  leftPos,
  bottomPos,
  rightPos,
  absolute,
}) => {
  return (
    <div
      className={`bg-${bgColor} py-1 px-4 rounded-md w-fit h-fit flex items-center gap-2 text-${textColor} ${
        absolute == true ? `absolute` : ``
      } top-${topPos} left-${leftPos} right-${rightPos} bottom-${bottomPos}`}
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  );
};

export default Chip;
