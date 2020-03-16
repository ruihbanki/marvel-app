import { searchCharacters, getCharacter } from "../../services/marvelServices";
import { normalizeCharacters } from "../../config/normalize";
import { updateEntities } from "../../entities/entitiesActions";

export function receiveCharacters(data) {
  return {
    type: "RECEIVE_CHARACTERS",
    data
  };
}

export function fetchCharacters(keywords) {
  return dispatch => {
    searchCharacters(keywords).then(resp => {
      const {
        data: { results }
      } = resp.data;
      const normalized = normalizeCharacters(results);
      dispatch(updateEntities(normalized.entities));
      dispatch(receiveCharacters(normalized.result));
    });
  };
}

export function fetchCharacter(id) {
  return dispatch => {
    getCharacter(id).then(resp => {
      console.log(resp);
    });
  };
}
