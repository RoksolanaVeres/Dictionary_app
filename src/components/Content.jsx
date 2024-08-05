import useSearchWordFetchedData from "../hooks/useSearchWordFetchedData";
import classes from "./Content.module.css";
import { FaPlay, FaPause } from "react-icons/fa6";
import { useRef, useState } from "react";

export default function Content({ searchedWord, setInputText, setSearchedWord }) {
  const { searchWordData, isLoading, isError, error } = useSearchWordFetchedData(searchedWord);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  console.log(searchWordData);

  let audioUrl = "";

  if (searchWordData) {
    if (searchWordData[0].phonetics.length === 0) {
      audioUrl = "";
    } else {
      const phoneticsIndex = searchWordData[0].phonetics.length - 1;
      audioUrl = searchWordData[0].phonetics[phoneticsIndex].audio;
    }
  }

  function handleWordClick(clickedWord) {
    setInputText(clickedWord);
    setSearchedWord(clickedWord);
  }

  function handleAudioClick() {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  function handleAudioEnd() {
    setIsPlaying(false);
  }

  if (searchedWord === "") {
    return (
      <div className="">Start searching to find definitions, synonyms and antonyms to any word</div>
    );
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (searchWordData) {
    return (
      <div className={classes.content__container}>
        <div className={classes.content__header}>
          <div className={classes.content__header_text}>
            <h1 className={classes.content__header_word}>{searchWordData[0].word}</h1>
            <p className={classes.content__header_transcription}>{searchWordData[0].phonetic}</p>
          </div>
          {audioUrl !== "" && (
            <div className="">
              <audio ref={audioRef} onEnded={handleAudioEnd} src={audioUrl}></audio>
              <button className={classes.content__header_play_btn} onClick={handleAudioClick}>
                {isPlaying ? (
                  <FaPause className={classes.content__play_icon} />
                ) : (
                  <FaPlay className={classes.content__play_icon} />
                )}
              </button>
            </div>
          )}
        </div>
        {searchWordData[0].meanings.map((meaning, index) => (
          <div key={index} className={classes.content__article_container}>
            <div className={classes.content__article_header}>
              <h2 className={classes.content__partOfSpeech}>{meaning.partOfSpeech}</h2>
              <div className={classes.content__divider}></div>
            </div>
            <h3 className={classes.content__article_subheader}>Meaning</h3>
            <ul className={classes.content__definitions_list}>
              {meaning.definitions.map((definition, index) => (
                <li key={index} className={classes.content__definition_list_item}>
                  {definition.definition}
                </li>
              ))}
            </ul>
            {meaning.synonyms.length > 0 && (
              <div className={classes.content__related_words_container}>
                <h3 className={classes.content__article_subheader}>Synonyms</h3>
                <ul className={classes.content__related_words_list}>
                  {meaning.synonyms.map((synonym, index) => (
                    <li key={index} className={classes.content__definition_list_item}>
                      <button
                        className={classes.content__word_btn}
                        onClick={() => handleWordClick(synonym)}
                      >
                        {synonym}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {meaning.antonyms.length > 0 && (
              <div className={classes.content__related_words_container}>
                <h3 className={classes.content__article_subheader}>Antonyms</h3>
                <ul className={classes.content__related_words_list}>
                  {meaning.antonyms.map((antonym, index) => (
                    <li key={index} className={classes.content__definition_list_item}>
                      <button
                        className={classes.content__word_btn}
                        onClick={() => handleWordClick(antonym)}
                      >
                        {antonym}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        <div className={classes.content__divider}></div>
      </div>
    );
  }
}
