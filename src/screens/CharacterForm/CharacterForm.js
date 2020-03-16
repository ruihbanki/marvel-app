import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchCharacter } from "../CharacterSearch/characterSearchActions";
import { getCharacter } from "./characterFormSelectors";

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
