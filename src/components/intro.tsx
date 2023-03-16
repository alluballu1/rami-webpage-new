import React from "react";
import styles from "@/styles/Home.module.css";
import Portrait from "@/images/Portrait.png";
import Image from "next/image";

const Intro = () => {
  return (
    <div className={styles.flexBox}>
      <div className={styles.gridElement}>
        <Image className={styles.portrait} src={Portrait} alt="Portrait" />
      </div>
      <div className={styles.gridElement}>
        <p className={styles.description}>
          How ArtByRamyar bagan Self taught Artist originally from a small
          country that is surrounded by various mountains and all shapes of
          lakes which led him to his inspiration. Ramyar has been always curious
          about learning different kind of technique and how to blend colors.
          His journey began with a simple Idea which he put on a canvas and
          encouraged him to take a bigger step in summer 2021. Ramyar´s work is
          often a reflection of his own personal experiences and perspectives.
          He hopes to share his love of nature and the beauty of the world
          around us through his work.
        </p>
      </div>
    </div>
  );
};

export default Intro;
