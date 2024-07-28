"use client";
import { useState, useEffect } from "react";

// A check to see if the device is a mobile device
const useMidDeviceCheck = () => {
  const [isMidDevice, setIsMidDevice] = useState(false);

  useEffect(() => {
    // Check if window is defined to ensure the code is running on the client
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMidDevice(window.innerWidth < 1024);
      };

      // Initial check
      handleResize();

      // Add resize event listener
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty dependency array ensures this runs once

  return isMidDevice;
};

export default useMidDeviceCheck;
