import React from "react";
import { getImageUrl } from "../../utils";
import { FormattedMessage } from "react-intl";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <FormattedMessage id="hero.title" />
        </h1>
        <p className={styles.description}>
        <FormattedMessage id="hero.description" />
        </p>
        <a href="mailto:alexmarcjr21@gmail.com" className={styles.contactBtn}>
          <FormattedMessage id="hero.contactBtn" />
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
