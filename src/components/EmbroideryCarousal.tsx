import React, { JSX } from "react";
import { Carousel } from "3d-react-carousal";
interface EmbroideryCarousalProps {
  slides: JSX[];
}
const EmbroideryCarousal = (props: EmbroideryCarousalProps) => {
  return <Carousel slides={props.slides} autoplay={true} interval={1000} />;
};
export default EmbroideryCarousal;
