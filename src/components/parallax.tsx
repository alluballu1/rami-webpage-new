import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import first from "@/images/newparallaximages/1.png";
import second from "@/images/newparallaximages/2.png";
import third from "@/images/newparallaximages/3.png";
import fourth from "@/images/newparallaximages/4.png";
import BG from "@/images/newparallaximages/BG-alt-1.png";
import Birds from "@/images/newparallaximages/Birds.png";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

const Banner = () => {
  const layerHandler = (
    marginTop: string,
    speed: number,
    image: string,
    width?: string,
    height?: string,
    translateX?: number[],
    translateY?: number[]
  ) => {
    return {
      image,
      speed,
      translateX,
      translateY,
      style: {
        width: width ?? "100%",
        height: height ?? "100%",
        overflow: "hidden",
        marginTop,
      },
    } as BannerLayer;
  };

  return (
    <ParallaxBanner
      layers={[
        layerHandler("50vh", -50, BG.src),
        layerHandler("0vh", 0, fourth.src),
        layerHandler("15vh", 10, third.src),
        layerHandler("25vh", 20, second.src),
        layerHandler("60vh", 30, first.src),
        layerHandler(
          "50vh",
          200,
          Birds.src,
          "25%",
          "25%",
          [150, 150],
          [80, 10]
        ),
      ]}
      style={{
        height: "110vh",
        width: "100%",
        marginTop: -170,
        justifyContent: "center",
      }}
    ></ParallaxBanner>
  );
};

export default Banner;
