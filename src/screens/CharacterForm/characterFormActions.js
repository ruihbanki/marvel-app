import { getCharacter } from "../../services/marvelServices";
import { normalizeCharacters } from "../../config/normalize";
import { updateEntities } from "../../entities/entitiesActions";

export const FETCH_CHARACTER_REQUEST = "FETCH_CHARACTER_REQUEST";
export const FETCH_CHARACTER_FAILURE = "FETCH_CHARACTER_FAILURE";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";

export function fetchCharacterRequest() {
  return {
    type: FETCH_CHARACTER_SUCCESS
  };
}

export function fetchCharacterFailure(error) {
  return {
    type: FETCH_CHARACTER_SUCCESS,
    error
  };
}

export function fetchCharacterSuccess(data) {
  return {
    type: FETCH_CHARACTER_SUCCESS,
    data
  };
}

export function fetchCharacter(id) {
  return dispatch => {
    getCharacter(id).then(resp => {
      const {
        data: { results }
      } = resp.data;
      const normalized = normalizeCharacters(results);
      dispatch(updateEntities(normalized.entities));
      dispatch(fetchCharacter(normalized.result));
    });
  };
}
