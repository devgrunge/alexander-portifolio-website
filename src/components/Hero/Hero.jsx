import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Alex</h1>
        <p className={styles.description}>
          I'm a quiet person, I like a relaxed atmosphere, but not too much. I
          love games and technology, dungeons and dragons player. With a lot of
          perseverance, I've been a developer for 3 years, it's been a
          sensational experience and I'm learning a lot
        </p>
        <a href="mailto:alexmarcjr21@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
