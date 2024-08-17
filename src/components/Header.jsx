import classes from "./Header.module.css";
import { VscBook } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { RiArrowDownSFill } from "react-icons/ri";
import { useState } from "react";

export default function Header({ selectedFont, setSelectedFont }) {
  const [fontsMenuOpen, setFontsMenuOpen] = useState(false);

  function handleFontsMenuClick() {
    setFontsMenuOpen((menuOpen) => {
      return !menuOpen;
    });
  }

  function closeFontsMenu() {
    setFontsMenuOpen(false);
  }

  function setSerifFont() {
    setSelectedFont("Serif");
    closeFontsMenu();
  }

  function setSansSerifFont() {
    setSelectedFont("Sans-serif");
    closeFontsMenu();
  }

  function setMonoFont() {
    setSelectedFont("Mono");
    closeFontsMenu();
  }

  return (
    <div className={classes.header__container}>
      <Link to="/">
        <VscBook className={classes.header__book_icon} />
      </Link>

      <div className={classes.header__fonts_theme_container}>
        <div className={classes.header__fonts_container}>
          <div className={classes.header__fonts_display} onClick={handleFontsMenuClick}>
            <p> {selectedFont} </p>
            <RiArrowDownSFill
              className={`${classes.header__arrow_icon} ${
                fontsMenuOpen && classes.header__arrow_icon_active
              }`}
            />
          </div>
          {fontsMenuOpen && (
            <ul className={classes.header__fonts_options_list}>
              <li
                className={`${classes.header__fonts_option} ${classes.header__fonts_serif}`}
                onClick={setSerifFont}
              >
                Serif
              </li>
              <li
                className={`${classes.header__fonts_option} ${classes.header__fonts_sansSerif}`}
                onClick={setSansSerifFont}
              >
                Sans-serif
              </li>
              <li
                className={`${classes.header__fonts_option} ${classes.header__fonts_monospace}`}
                onClick={setMonoFont}
              >
                Mono
              </li>
            </ul>
          )}
        </div>
        <div className={classes.header__divider}></div>
        <div className={classes.header__theme_switcher}>THEME</div>
      </div>
    </div>
  );
}
