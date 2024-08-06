import classes from "./Header.module.css";
import { VscBook } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function Header({ selectedFont, setSelectedFont }) {
  function handleFontChange(e) {
    setSelectedFont(() => {
      if (e.target.value === "serif") {
        return '"Times New Roman", Times, serif';
      } else if (e.target.value === "sansSerif") {
        return '"Trebuchet MS", Arial, sans-serif';
      } else if (e.target.value === "monospace") {
        return '"Courier New", Courier, monospace';
      }
    });
  }

  return (
    <div className={classes.header__container}>
      <Link to="/">
        <VscBook className={classes.header__book_icon} />
      </Link>

      <div className={classes.header__fonts_theme_container}>
        <div className="">
          <select name="fonts" onChange={handleFontChange} className={classes.header__fonts_select}>
            <option value="serif" className={classes.header__fonts_serif}>
              Serif
            </option>
            <option value="sansSerif" className={classes.header__fonts_sansSerif}>
              Sans Serif
            </option>
            <option value="monospace" className={classes.header__fonts_monospace}>
              Monospace
            </option>
          </select>
        </div>
        <div className={classes.header__divider}></div>
        <div className={classes.header__theme_switcher}>THEME</div>
      </div>
    </div>
  );
}
