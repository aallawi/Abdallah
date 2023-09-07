import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import "./Gallery.css";
import SubHeading from "./../../components/SubHeading/SubHeading";
import { images } from "../../constants";

const allImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 340;
    } else {
      current.scrollLeft += 340;
    }
  };

  return (
    <div className="gallery flex_center bg_black_photo section_padding">
      <div className="gallery_info">
        <SubHeading
          parag={"Instagram"}
          title={"Photo Gallery"}
          posion={"Flex start"}
        />
        <p className="text_white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <div>
          <button type="button" className="custom_button">
            View More
          </button>
        </div>
      </div>

      <div className="gallery_images">
        <div className="gallery_images_container" ref={scrollRef}>
          {allImages.map((image, index) => (
            <div className="gallery_images_card flex_center" key={index}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery_image_icon" />
            </div>
          ))}
        </div>

        <div className="gallery_images_arrows">
          <BsArrowLeftShort
            className="gallery_arrow_icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery_arrow_icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
