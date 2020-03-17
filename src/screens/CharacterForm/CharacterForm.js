import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCharacter } from "./characterFormSelectors";
import { fetchCharacter } from "./characterFormActions";

const CharacterForm = React.memo(() => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const character = useSelector(state => getCharacter(state, id));

  useEffect(() => {
    dispatch(fetchCharacter(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>CharacterForm</h1>
      <Link to="/">Back</Link>
      <input type="text" value={character.name} />
    </div>
  );
});

export default CharacterForm;
