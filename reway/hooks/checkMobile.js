"use client";
import { useState, useEffect } from "react";

// Custom hook to check if the device is mobile
const useMobileCheck = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 720);
      };

      handleResize(); // Initial check
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return isMobile;
};

export default useMobileCheck;
