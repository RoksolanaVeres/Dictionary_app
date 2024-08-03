import { useContext } from "react";
import { SearchWordContext } from "../store/SearchWordContext";

export default function useSearchWord() {
  const searchWordContext = useContext(SearchWordContext);
  if (!searchWordContext) {
    throw new Error("useOrder must be used within an SearchWordContextProvider!");
  }

  return searchWordContext;
}
