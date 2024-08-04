import { useQuery } from "@tanstack/react-query";

export default function useSearchWordFetchedData(searchedWord) {
  let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchedWord;

  async function fetchWord() {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Sorry, we can't find this word!");
    }
    return data;
  }

  const {
    data: searchWordData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["words", [searchedWord]],
    queryFn: fetchWord,
    enabled: searchedWord !== "",
    retry: false,
  });

  return {
    searchWordData,
    isLoading,
    isError,
    error,
  };
}
