import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import styles from "@/styles/Home.module.css";

type Props = {
  data: string;
};

const ParallaxTesting = (props: Props) => {
  const { data } = props;
  const [pos, setPos] = useState(0.5);
  /* useEffect(() => {
    addEventListener("scroll", (e) => console.log(e, window.screenTop));
  }); */
  return (
    <>
      <Parallax
        onProgressChange={(e) => console.log(1 - e * 1.5)}
        onProgressCapture={(e) => console.log(e)}
        slot="1"
        speed={-1000}
      >
        <div
          style={{
            padding: 10,
            backgroundColor: "pink",
            zIndex: 60,
            justifyContent: "center",
            opacity: pos,
            position: "absolute",
            marginTop: 100,
          }}
        >
          sunset
        </div>
      </Parallax>
      <Parallax speed={20}>
        <div
          id="test"
          style={{ padding: 10, backgroundColor: "green", zIndex: 70 }}
        >
          sunset
        </div>
      </Parallax>
      {/* <Parallax speed={-150}>
        <div style={{ padding: 10, backgroundColor: "cyan", zIndex: 80 }}>
          sunset
        </div>
      </Parallax>
      <Parallax speed={10}>
        <div style={{ padding: 10, backgroundColor: "red", zIndex: 90 }}>
          sunset
        </div>
      </Parallax>
      <Parallax speed={0}>
        <div
          style={{
            padding: 10,
            backgroundColor: "blue",
            height: 500,
            zIndex: 100,
          }}
        />
      </Parallax> */}
      <div className={styles.testing}>{data}</div>
    </>
  );
};

export default ParallaxTesting;
