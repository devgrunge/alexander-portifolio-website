import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../locales";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { changeLanguage } = useLanguage();


  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Alexander
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
          <li>
            <button onClick={() => changeLanguage("pt")}>
              <FormattedMessage id="language.pt" defaultMessage="Pt" />
            </button>{" "}
            <span>|</span>
            <button onClick={() => changeLanguage("en")}>
              <FormattedMessage id="language.en" defaultMessage="En" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
