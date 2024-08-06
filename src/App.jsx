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
  const location = useLocation();
  const [selectedFont, setSelectedFont] = useState("serif");

  useEffect(() => {
    setSearchedWord(wordParams || "");
    setInputText(wordParams || "");
  }, [location, wordParams]);

  return (
    <div className={classes.mainContainer} style={{ fontFamily: selectedFont }}>
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
