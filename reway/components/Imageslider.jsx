"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "./Chip";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

// Move images to a separate data file if necessary
const images = [
  {
    url: "/images/Main-boot.png",
    id: 0,
  },
  {
    url: "/images/Main-boot-5.png",
    id: 1,
  },
  {
    url: "/images/main-boot-4.png",
    id: 2,
  },
  {
    url: "/images/Main-boot-3.png",
    id: 3,
  },
  {
    url: "/images/Main-boot-2.png",
    id: 4,
  },
];

const Imageslider = () => {
  const [isActive, setIsActive] = useState(2); // Set initial active index
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 }); // Cursor position state
  const [showLabel, setShowLabel] = useState(false); // State to show/hide label
  const [isZoomed, setIsZoomed] = useState(false); // State to track zoom status
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  // Handle previous image
  const prevImage = () => {
    setIsActive((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle next image
  const nextImage = () => {
    setIsActive((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Update cursor position when moving the mouse over the image
  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY }); // Use clientX and clientY for viewport-relative position
  };

  // Show label when the mouse enters the image
  const handleMouseEnter = () => {
    setShowLabel(true);
  };

  // Hide label when the mouse leaves the image
  const handleMouseLeave = () => {
    setShowLabel(false);
  };

  return (
    <>
      <div className="w-full select-none relative">
        {" "}
        {/* Add select-none to prevent text/image selection */}
        <div className="relative">
          <Chip
            bgColor="rewayBlue"
            icon={faTag}
            text="-40% Off"
            textColor="rewayWhite"
            absolute={true}
            classes="chipHoverTop"
          />
          <div className="absolute top-[45%] w-full flex justify-between px-8 text-rewayGrey z-50">
            {/* Previous Button */}
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="3x"
              className="cursor-pointer outline-none" // Add outline-none to remove button focus outline
              onClick={(e) => {
                e.preventDefault(); // Prevent default action
                prevImage();
              }}
            />
            {/* Next Button */}
            <FontAwesomeIcon
              icon={faChevronRight}
              size="3x"
              className="cursor-pointer outline-none" // Add outline-none to remove button focus outline
              onClick={(e) => {
                e.preventDefault(); // Prevent default action
                nextImage();
              }}
            />
          </div>
          {/* Active Image */}
          <Modal open={open} onClose={onCloseModal} onEscKeyDown={onCloseModal}>
            <Image src={images[isActive].url} width={1920} height={1080} />
          </Modal>
          <div
            className={`${
              isZoomed ? "cursor-zoom-out z-[1000]" : "cursor-zoom-in"
            } w-full relative z-`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onOpenModal}
          >
            <Image
              src={images[isActive].url}
              width={1920}
              id="enlargeMe"
              height={1080}
              alt={`Image ${isActive + 1}`} // Add alt text for accessibility
              draggable="false" // Prevent image from being dragged
            />
            {/* Label that follows the cursor */}
            {showLabel && (
              <div
                style={{
                  position: "fixed", // Change to fixed positioning to ensure it follows the cursor relative to the viewport
                  top: cursorPos.y + 20, // Adjust this value to control the distance from the cursor
                  left: cursorPos.x + 20, // Adjust this value to control the distance from the cursor
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  pointerEvents: "none", // Make the label not interfere with cursor actions
                  whiteSpace: "nowrap", // Prevent label text from wrapping
                  zIndex: 1000, // Ensure the label is above other elements
                }}
              >
                {isZoomed ? "Click to zoom Out" : "Click to enlarge"}
              </div>
            )}
          </div>
          <div className="bg-[rgba(0,0,0,0.18)] p-1 rounded-full absolute bottom-5 flex gap-2 left-[40%]">
            {/* Dots Indicator */}
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 ${
                  isActive === index ? "bg-rewayWhite" : "bg-rewayLightGray"
                } rounded-full`}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex gap-2 w-full flex-wrap mt-2">
          {/* Thumbnail Images */}
          {images.map((image) => (
            <div key={image.id} className="relative">
              <img
                src={image.url}
                width={1920}
                height={1080}
                className={`cursor-pointer w-[7.7rem] max-md:w-28${
                  isActive === image.id
                    ? `border-2 border-rewayBlue brightness-75`
                    : ``
                }`}
                onClick={() => setIsActive(image.id)} // Click to set active image
                alt={`Thumbnail ${image.id + 1}`} // Add alt text for accessibility
                draggable="false" // Prevent image from being dragged
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Imageslider;
