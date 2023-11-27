import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://placekitten.com/800/400" alt="Slide 1" />
      </div>
      <div>
        <img src="https://placekitten.com/801/401" alt="Slide 2" />
      </div>
      <div>
        <img src="https://placekitten.com/802/402" alt="Slide 3" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

const CustomNextArrow = ({ onClick }:any) => (
  <div
    className="absolute top-1/2  transform -translate-y-1/2 cursor-pointer -right-6"
    onClick={onClick}
  >
    <span className="text-black text-2xl">&rarr;</span>
  </div>
);

const CustomPrevArrow = ({ onClick }:any) => (
  <div
    className="absolute top-1/2  transform -translate-y-1/2 cursor-pointer -left-6"
    onClick={onClick}
  >
    <span className="text-black text-2xl">&larr;</span>
  </div>
);


export default Carousel;
