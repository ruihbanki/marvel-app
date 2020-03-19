import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import { getCharacters, getPagination } from "./characterSearchSelectors";
import { fetchCharacters } from "./characterSearchActions";
import CharacterCard from "./CharacterCard";
import CardGrid from "../../components/CardGrid";

const CharacterSearch = React.memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();

  const characters = useSelector(getCharacters);
  const pagination = useSelector(getPagination);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const handleSearch = event => {
    event.preventDefault();
    dispatch(fetchCharacters(search, 1));
  };

  const handlePaginate = (event, page) => {
    event.preventDefault();
    dispatch(fetchCharacters(search, page));
  };

  const handleEdit = character => {
    history.push(`/character/${character.id}`);
  };

  const count = Math.ceil(pagination.total / pagination.limit);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={search} onChange={e => setSearch(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <CardGrid mt={4} mb={4}>
        {characters.map(c => (
          <CharacterCard character={c} onClick={handleEdit} />
        ))}
      </CardGrid>
      <Pagination
        count={count}
        page={pagination.offset + 1}
        onChange={handlePaginate}
        color="primary"
      />
    </div>
  );
});

export default CharacterSearch;
