import classes from "./App.module.css";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Content from "./components/Content";

import { useState } from "react";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [searchedWord, setSearchedWord] = useState(inputText);

  return (
    <div className={classes.mainContainer}>
      <Header />
      <Searchbar
        setSearchedWord={setSearchedWord}
        inputText={inputText}
        setInputText={setInputText}
      />
      <Content
        searchedWord={searchedWord}
        setSearchedWord={setSearchedWord}
        setInputText={setInputText}
      />
    </div>
  );
}
