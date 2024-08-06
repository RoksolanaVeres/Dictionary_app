import classes from "./Header.module.css";
import { VscBook } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={classes.header__container}>
      <Link to="/">
        <VscBook className={classes.header__book_icon} />
      </Link>

      <div className={classes.header__fonts_theme_container}>
        <div className="">FONTS</div>
        <div className={classes.header__divider}></div>
        <div className={classes.header__theme_switcher}>THEME</div>
      </div>
    </div>
  );
}
