import classes from "./App.module.css";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Content from "./components/Content";

import { useState } from "react";

export default function App() {
  const [searchedWord, setSearchedWord] = useState("");

  return (
    <div className={classes.mainContainer}>
      <Header />
      <Searchbar setSearchedWord={setSearchedWord} />
      <Content searchedWord={searchedWord} />
    </div>
  );
}
