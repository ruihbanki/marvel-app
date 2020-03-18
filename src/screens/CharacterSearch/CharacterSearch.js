import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { getCharacters, getLoading } from "./characterSearchSelectors";
import { fetchCharacters } from "./characterSearchActions";
import CharacterCard from "./CharacterCard";
import CardGrid from "../../components/CardGrid";

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
      <CardGrid>
        {characters.map(c => (
          <CharacterCard character={c} />
        ))}
      </CardGrid>
    </div>
  );
});

export default CharacterSearch;
