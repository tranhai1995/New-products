import React from "react";
import { Carousel, Image } from "antd";
import { CarouselH3 } from "@zef/pages/user/carousel/style";

const CarouselCenter = () => {
  return (
    <Carousel autoplay>
      <div>
        <CarouselH3>
          <Image src="" />
        </CarouselH3>
      </div>
      <div>
        <CarouselH3>2</CarouselH3>
      </div>
      <div>
        <CarouselH3>3</CarouselH3>
      </div>
      <div>
        <CarouselH3>4</CarouselH3>
      </div>
    </Carousel>
  );
};

export default CarouselCenter;
