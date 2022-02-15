import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
// import { Carousel } from "react-bootstrap";

// let slider = document.getElementById("#caption");
// let prevBtn = document.querySelector(".prev");
// let nextBtn = document.querySelector(".next");
// let currentSlide = 0;

export const PersonsSection = () => {
  const data = [
    {
      img: "/assets/img/card_img_8.jpg",
      img2: "/assets/img/candle.jpg",
      heading: "Birthday",
      paragraph:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      img: "/assets/img/card_img_9.jpg",
      img2: "/assets/img/card_img_13.jpg",
      heading: "Family",
      paragraph:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      img: "/assets/img/card_img_4.jpg",
      img2: "/assets/img/card_img_5.png",
      heading: "Celeberation",
      paragraph:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];
  const [index, setIndex] = React.useState(null);
  const [count, setCount] = React.useState(0);
  const [currIndex, setCurrIndex] = React.useState(null);
  React.useEffect(() => {
    setIndex(data[count]);
    setCurrIndex(data?.findIndex((index) => index === index));
  }, [setInterval(3000)]);

  function prev() {
    if (currIndex <= 0) {
      setCount(count - 1);
      setIndex(data[count]);
    }
  }

  function next() {
    if (currIndex >= 0 && currIndex <= data.length - 1) {
      setCount(count + 1);
      setIndex(data[count]);
    }
  }
  const caption = {
    TransitionEvent,
  };
  return (
    <div className="our_margin">
      <div className="text-center headings mb-5">
        <h1>What People Say</h1>
      </div>
      <div className="custom_slider">
        <div className="custom_item w-100">
          <img src={index?.img} />
          <div className="caption_slide">
            <div className="caption">
              <img src={index?.img2} className="carousal_img_person" />
              <h2>
                <strong>{index?.heading}</strong>
              </h2>
              <p>{index?.paragraph}</p>
            </div>
          </div>
        </div>

        <button className="next" onClick={next}>
          <AiOutlineRight className="right" />
          {/* <img src="/assets/img/right-arrow.png" width={25} /> */}
        </button>
        <button className="prev" onClick={prev}>
          <AiOutlineLeft className="left" />
          {/* <img src="/assets/img/right-arrow.png" width={25} /> */}
        </button>
      </div>
    </div>
  );
};
