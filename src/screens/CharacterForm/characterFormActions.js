import { getCharacter } from "../../services/marvelServices";
import { normalizeCharacters } from "../../config/normalize";
import { updateEntities, updateEntity } from "../../entities/entitiesActions";

export const FETCH_CHARACTER_REQUEST = "FETCH_CHARACTER_REQUEST";
export const FETCH_CHARACTER_FAILURE = "FETCH_CHARACTER_FAILURE";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";

export function fetchCharacterRequest() {
  return {
    type: FETCH_CHARACTER_REQUEST
  };
}

export function fetchCharacterFailure(error) {
  return {
    type: FETCH_CHARACTER_FAILURE,
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
    dispatch(fetchCharacterRequest());
    getCharacter(id).then(resp => {
      const normalized = normalizeCharacters(resp.data.data.results);
      dispatch(updateEntities(normalized.entities));
      dispatch(fetchCharacterSuccess());
    });
  };
}

export function saveCharacter(character) {
  return dispatch => {
    dispatch(updateEntity("characters", character.id, character));
  };
}
