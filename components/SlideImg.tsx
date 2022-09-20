import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import beerImg from "../public/beer.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideImg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <Image src={beerImg} alt="beer" width={90} height={200} />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
};

export default SlideImg;
