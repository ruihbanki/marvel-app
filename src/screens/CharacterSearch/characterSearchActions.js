import { getCharacters } from "../../services/marvelServices";
import { normalizeCharacters } from "../../config/normalize";
import { updateEntities } from "../../entities/entitiesActions";

export const FETCH_CHARACTERS_REQUEST = "FETCH_CHARACTERS_REQUEST";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";

export function fetchCharactersRequest() {
  return {
    type: FETCH_CHARACTERS_SUCCESS
  };
}

export function fetchCharactersFailure(error) {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    error
  };
}

export function fetchCharactersSuccess(data) {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    data
  };
}

export function fetchCharacters(keywords) {
  return dispatch => {
    getCharacters(keywords).then(resp => {
      const {
        data: { results }
      } = resp.data;
      const normalized = normalizeCharacters(results);
      dispatch(updateEntities(normalized.entities));
      dispatch(fetchCharactersSuccess(normalized.result));
    });
  };
}
