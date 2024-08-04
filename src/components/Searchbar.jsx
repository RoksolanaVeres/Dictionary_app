import { FaMagnifyingGlass } from "react-icons/fa6";

import classes from "./Searchbar.module.css";

export default function Searchbar({ setSearchedWord }) {
  function handleInputChange(e) {
    console.log(e.target.value);
    if (e.target.value === "") {
      clearContent();
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const submittedData = new FormData(e.target);
    const searchedWord = submittedData.get("searchWord");
    setSearchedWord(searchedWord);
  }

  function clearContent() {
    setSearchedWord("");
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
