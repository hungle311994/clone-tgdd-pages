import "./BannerSlider.css";
import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

const items = [
  {
    src: require("../../assets/banner/slide/1.png"),
    key: 1,
  },
  {
    src: require("../../assets/banner/slide/2.png"),
    key: 2,
  },
  {
    src: require("../../assets/banner/slide/3.png"),
    key: 3,
  },
];

const BannerSlider = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div className="wrapper" style={{ position: "relative" }}>
      <Carousel
        className="banner-slider"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        {slides}

        <CarouselControl
          className="banner-slider-control prev"
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          className="banner-slider-control next"
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default BannerSlider;
