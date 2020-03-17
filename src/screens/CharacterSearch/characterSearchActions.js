import { getCharacters } from "../../services/marvelServices";
import { normalizeCharacters } from "../../config/normalize";
import { updateEntities } from "../../entities/entitiesActions";

export const FETCH_CHARACTERS_REQUEST = "FETCH_CHARACTERS_REQUEST";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";

export function fetchCharactersRequest() {
  return {
    type: FETCH_CHARACTERS_REQUEST
  };
}

export function fetchCharactersFailure(error) {
  return {
    type: FETCH_CHARACTERS_FAILURE,
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
    dispatch(fetchCharactersRequest());
    getCharacters(keywords).then(resp => {
      const normalized = normalizeCharacters(resp.data.data.results);
      dispatch(updateEntities(normalized.entities));
      dispatch(fetchCharactersSuccess(normalized.result));
    });
  };
}
