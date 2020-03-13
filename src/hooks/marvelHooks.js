import { useEffect, useState } from "react";
import { searchCharacters } from "../services/marvelServices";

export const useSearchCharacters = search => {
  const [data, setData] = useState();
  useEffect(() => {
    searchCharacters(search).then(resp => {
      setData(resp.data.data);
    });
  }, [search]);
  return {
    data
  };
};
