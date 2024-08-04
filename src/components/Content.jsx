import useSearchWord from "../hooks/useSearchWord";
import classes from "./Content.module.css";
import { FaPlay } from "react-icons/fa6";

export default function Content({ searchedWord }) {
  const { searchWordData, isLoading, isError, error } = useSearchWord(searchedWord);

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

          <button className={classes.content__header_play_btn}>
            <FaPlay className={classes.content__play_icon} />
          </button>
        </div>
        {searchWordData[0].meanings.map((meaning, index) => (
          <div key={index} className={classes.content__article_container}>
            <div className={classes.content__article_header}>
              <h2 className={classes.content__partOfSpeech}>{meaning.partOfSpeech}</h2>
              <div className={classes.content__divider}></div>
            </div>
            <h3 className={classes.content__meaning_header}>Meaning</h3>
            <ul className={classes.content__definitions_list}>
              {meaning.definitions.map((definition, index) => (
                <li key={index} className={classes.content__definition_list_item}>
                  {definition.definition}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={classes.content__divider}></div>
      </div>
    );
  }
}
