import classes from "./App.module.css";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Content from "./components/Content";

import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [searchParams] = useSearchParams();
  const wordParams = searchParams.get("word");
  const [searchedWord, setSearchedWord] = useState(wordParams || "");
  const [selectedFont, setSelectedFont] = useState("Serif");
  const location = useLocation();

  useEffect(() => {
    setSearchedWord(wordParams || "");
    setInputText(wordParams || "");
  }, [location, wordParams]);

  let font;
  if (selectedFont === "Serif") {
    font = '"Times New Roman", Times, serif';
  } else if (selectedFont === "Sans-serif") {
    font = '"Trebuchet MS", Arial, sans-serif';
  } else if (selectedFont === "Mono") {
    font = '"Courier New", Courier, monospace';
  }

  return (
    <div className={classes.mainContainer} style={{ fontFamily: font }}>
      <Header selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
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
