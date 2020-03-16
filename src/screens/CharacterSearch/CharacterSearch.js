import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "./characterSearchSelectors";
import { fetchCharacters } from "./characterSearchActions";
import { Link } from "react-router-dom";

const CharacterSearch = React.memo(() => {
  const characters = useSelector(getCharacters);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const handleSearch = event => {
    event.preventDefault();
    dispatch(fetchCharacters(search));
  };

  return (
    <div>
      <h1>CharacterSearch</h1>
      <form onSubmit={handleSearch}>
        <input value={search} onChange={e => setSearch(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {characters.map(c => (
          <li>
            <Link to={`/character/${c.id}`}>{c.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CharacterSearch;
