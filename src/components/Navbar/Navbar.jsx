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
            <a href="#about">
              <FormattedMessage id="navbar.about"/>
            </a>
          </li>
          <li>
            <a href="#experience">
            <FormattedMessage id="navbar.experience"/>
              </a>
          </li>
          <li>
            <a href="#projects">
            <FormattedMessage id="navbar.experience"/>
              </a>
          </li>
          <li>
            <a href="#about">
            <FormattedMessage id="navbar.contact"/>
            </a>
          </li>
          <li>
            <button
              className={styles.translationbtn}
              onClick={() => changeLanguage("pt")}
            >
              <FormattedMessage id="language.pt" defaultMessage="Pt" />
            </button>
            <span>|</span>
            <button
              className={styles.translationbtn}
              onClick={() => changeLanguage("en")}
            >
              <FormattedMessage id="language.en" defaultMessage="En" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
