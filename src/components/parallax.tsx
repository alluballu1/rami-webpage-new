import React, { useEffect, useState } from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import styles from "@/styles/Home.module.css";
import mountains from "@/images/Mountains.png";
import sun from "@/images/Sun.png";
import first from '@/images/parallaximages/1.png'
import second from '@/images/parallaximages/2.png'
import third from '@/images/parallaximages/3.png'
import fourth from '@/images/parallaximages/4.png'
import BG from '@/images/parallaximages/BG.png'
import Birds from '@/images/parallaximages/Birds.png'
import Image from "next/image";

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
      <ParallaxBanner
        layers={[
          {
            image: BG.src,
            speed: -10,
            style: { width: '100%', height: '100%',  overflow: "hidden" },
          },
          {
            image: fourth.src,
            speed: 20,
            style: { width: '100%', height: '100%', marginTop: '15vh', overflow: "hidden" },
          },
          {
            image: third.src,
            speed: 30,
            style: { width: '100%', height: '100%', marginTop: '25vh', overflow: "hidden" },
          },
          {
            image: Birds.src,
            speed: 50,

            translateX: [200, 200],
            translateY: [0, 10],
            style: { width: '25%', height: '25%', marginTop: '50vh', overflow: "hidden" },
          },
          {
            image: second.src,
            speed: 60,
            style: { width: '100%', height: '100%', marginTop: '75vh', overflow: "hidden" },
          },
          
          {
            image: first.src,
            speed:80,
            style: { width: '100%', height: '100%', marginTop: '100vh', overflow: "hidden" },
          },
        ]}
        style={{
          height: '100vh',
          width: "100%",
          marginTop: 0,
          justifyContent: 'center',
          backgroundColor: 'pink',
        }}
      ></ParallaxBanner>
      {/* <Parallax speed={-50}>
          <Image  src={sun} style={{ overflow: 'hidden' }} alt="mountains" width={400} height={400} />
      </Parallax> */}
      {/*       <Parallax
        speed={0}
      >
       <div style={{ padding: 10, backgroundColor: "blue", zIndex: 80 }}>
          sunset
        </div>
        <Image src={mountains} alt="mountains" width={2400} height={600} />
      </Parallax> */}
      {/* <Parallax
        speed={50}
      >
        <div style={{ width: '100vh', height: 600 }}>
          <Image src={mountains} style={{ overflow: 'hidden' }} alt="mountains" />
        </div>
        <div style={{ width: '100%', backgroundColor: 'black', height: '100vh', marginTop: -10 }}/>
      </Parallax> */}
      {/* <div style={{ width: '100%', backgroundColor: 'black', height: 800, marginTop: -10 }}/> */}
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
      {/* <div className={styles.testing}>{data}</div> */}
    </>
  );
};

export default ParallaxTesting;
