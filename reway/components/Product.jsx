"use client";
import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="/images/Boots01.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="/images/Boots02.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="/images/Boots03.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

const Product = () => {
  return (
    <div className="w-20">
      <AliceCarousel mouseTracking items={items} />
    </div>
  );
};

export default Product;
