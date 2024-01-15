import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { FormattedMessage } from "react-intl";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>
        <FormattedMessage id="about.title" />
      </h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>
                <FormattedMessage id="about.frontendTitle" />
              </h3>
              <p>
                <FormattedMessage id="about.frontendDescription" />
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3><FormattedMessage id="about.backendTitle" /></h3>
              <p>
               <FormattedMessage id="about.backendDescription"/>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3><FormattedMessage id="about.sofSkillTitle" /></h3>
              <p>
              <FormattedMessage id="about.sofSkillDescription" />
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
