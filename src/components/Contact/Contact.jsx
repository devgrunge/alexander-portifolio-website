import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { FormattedMessage } from "react-intl";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2><FormattedMessage id="contacts.title"/></h2>
        <p><FormattedMessage id="contacts.description" /></p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:alexmarcjr21@gmail.com">alexmarcjr21@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/alexander-marcondes-jr-dev/">in/alexander-marcondes-jr-dev</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/devgrunge">github.com/devgrunge</a>
        </li>
      </ul>
    </footer>
  );
};
