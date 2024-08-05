import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";

import classes from "./Searchbar.module.css";

export default function Searchbar({ setSearchedWord, inputText, setInputText }) {
  let [searchParams, setSearchParams] = useSearchParams();

  function handleInputChange(e) {
    setInputText(e.target.value);
    if (e.target.value === "") {
      clearContent();
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const submittedData = new FormData(e.target);
    const searchedWord = submittedData.get("searchWord");
    setSearchedWord(searchedWord);
    setSearchParams({ word: searchedWord });
  }

  function clearContent() {
    setSearchedWord("");
    setSearchParams({});
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
          value={inputText}
        />
        <button className={classes.search_btn}>
          <FaMagnifyingGlass className={classes.magnifyingGlass_icon} />
        </button>
      </form>
    </>
  );
}
