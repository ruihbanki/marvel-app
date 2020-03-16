import { searchCharacters } from "../../services/marvelServices";
import { normalizeCharacters } from "../../config/normalize";
import { updateEntities } from "../../entities/entitiesActions";

export function receiveCharacters(data) {
  return {
    type: "RECEIVE_CHARACTERS",
    data
  };
}

export function fetchCharacters() {
  return dispatch => {
    searchCharacters().then(resp => {
      const {
        data: { results }
      } = resp.data;
      const normalized = normalizeCharacters(results);
      dispatch(updateEntities(normalized.entities));
      dispatch(receiveCharacters(normalized.result));
    });
  };
}
