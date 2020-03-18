import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, getLoading } from "./characterSearchSelectors";
import { fetchCharacters } from "./characterSearchActions";
import { Link } from "react-router-dom";

const CharacterSearch = React.memo(() => {
  const characters = useSelector(getCharacters);
  const loading = useSelector(getLoading);
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
      {loading && "Loading..."}
      <ul>
        {characters.map(c => (
          <li key={c.id}>
            <img
              src={`${c.thumbnail.path}.${c.thumbnail.extension}`}
              width="100"
            />
            <Link to={`/character/${c.id}`}>{c.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CharacterSearch;
