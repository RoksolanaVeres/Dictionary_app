import classes from "./App.module.css";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Content from "./components/Content";

import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const wordParams = searchParams.get("word");
  const [searchedWord, setSearchedWord] = useState(wordParams || "");
  const location = useLocation();

  useEffect(() => {
    setSearchedWord(wordParams || "");
    setInputText(wordParams || "");
  }, [location, wordParams]);

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
