// import { createContext, useState } from "react";
// import { useQuery } from "@tanstack/react-query";

// export const SearchWordContext = createContext(null);

// export default function SearchWordContextProvider({ children }) {
//   const [searchedWord, setSearchedWord] = useState("");

//   let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchedWord;

//   async function fetchWord() {
//     const response = await fetch(url);
//     const data = await response.json();
//     if (!response.ok) {
//       throw new Error("Sorry, we can't find this word!");
//     }
//     return data;
//   }

//   function handleFormSubmit(e) {
//     e.preventDefault();
//     const submittedData = new FormData(e.target);
//     const searchedWord = submittedData.get("searchWord");
//     setSearchedWord(searchedWord);
//   }

//   function clearContent() {
//     setSearchedWord("");
//   }

//   const {
//     data: searchWordData,
//     isLoading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ["words", [searchedWord]],
//     queryFn: fetchWord,
//     enabled: searchedWord !== "",
//     retry: false,
//   });

//   const value = {
//     handleFormSubmit,
//     clearContent,
//     searchedWord,
//     searchWordData,
//     isLoading,
//     isError,
//     error,
//   };
//   return <SearchWordContext.Provider value={value}>{children}</SearchWordContext.Provider>;
// }
