import React, { useState } from "react";
import "./slides.css";
import slides1 from "../../assets/slide1.png";
import slides2 from "../../assets/slide2.png";
import slides3 from "../../assets/slide3.jpg";

const Slides = () => {
  const [backGroung, setBackGroung] = useState(slides1);

  const wait = (photo) =>
    setTimeout(() => {
      setBackGroung(photo);
    }, 400);

  return (
    <div className="slides">
      <img src={backGroung} alt="slide" />
      <div className="slide_title">
        <p onMouseEnter={() => wait(slides1)}>
          <i
            className={`${
              backGroung === slides1
                ? "ri-verified-badge-fill active"
                : "ri-verified-badge-fill"
            }`}
          ></i>
          <span
            className={`${
              backGroung === slides1 ? "slide_item active" : "slide_item"
            }`}
          >
            Desserts Menu
          </span>
        </p>

        <p onMouseEnter={() => wait(slides2)}>
          <i
            className={`${
              backGroung === slides2
                ? "ri-verified-badge-fill active"
                : "ri-verified-badge-fill"
            }`}
          ></i>
          <span
            className={`${
              backGroung === slides2 ? "slide_item active" : "slide_item"
            }`}
          >
            Food Menu
          </span>
        </p>

        <p onMouseEnter={() => wait(slides3)}>
          <i
            className={`${
              backGroung === slides3
                ? "ri-verified-badge-fill active"
                : "ri-verified-badge-fill"
            }`}
          ></i>
          <span
            className={`${
              backGroung === slides3 ? "slide_item active" : "slide_item"
            }`}
          >
            bar menu
          </span>
        </p>
      </div>
    </div>
  );
};
export default Slides;
