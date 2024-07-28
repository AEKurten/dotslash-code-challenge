"use client";
import { useState, useEffect } from "react";

// A check to see if the device is a mobile device
const useMobileCheck = () => {
  // Initialize state as false since window might not be available immediately
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only run on the client-side
    if (typeof window !== "undefined") {
      // Function to handle window resizing
      const handleResize = () => {
        setIsMobile(window.innerWidth < 720);
      };

      handleResize(); // Initial check
      window.addEventListener("resize", handleResize); // Add event listener

      // Cleanup function to remove event listener
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return isMobile;
};

export default useMobileCheck;
