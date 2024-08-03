import useSearchWord from "../hooks/useSearchWord";
import { FaMagnifyingGlass } from "react-icons/fa6";

import classes from "./Searchbar.module.css";

export default function Searchbar() {
  const { handleFormSubmit, clearContent } = useSearchWord();

  function handleInputChange(e) {
    console.log(e.target.value);
    if (e.target.value === "") {
      clearContent();
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className={classes.searchForm}>
        <input
          type="text"
          name="searchWord"
          className={classes.searchbar}
          onChange={handleInputChange}
          placeholder="Search ..."
        />
        <FaMagnifyingGlass className={classes.magnifyingGlass_icon} />
      </form>
    </>
  );
}
