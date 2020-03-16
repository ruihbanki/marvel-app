import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "./characterSearchSelectors";
import { fetchCharacters } from "./characterSearchActions";

const CharacterSearch = React.memo(() => {
  const characters = useSelector(getCharacters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div>
      CharacterSearch
      <ul>
        {characters.map(c => (
          <li>{c.name}</li>
        ))}
      </ul>
    </div>
  );
});

export default CharacterSearch;
