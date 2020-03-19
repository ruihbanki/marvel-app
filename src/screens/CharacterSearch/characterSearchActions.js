import { getCharacters } from "../../services/marvelServices";
import { normalizeCharacters } from "../../config/normalize";
import { updateEntities } from "../../entities/entitiesActions";
import { setLoading } from "../Main/mainActions";

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

export function fetchCharactersSuccess(data, pagination) {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    data,
    pagination
  };
}

export function fetchCharacters(keywords, page) {
  return dispatch => {
    dispatch(fetchCharactersRequest());
    dispatch(setLoading(true));
    getCharacters(keywords, page - 1, 20).then(resp => {
      const {
        data: {
          data: { offset, limit, total, count, results }
        }
      } = resp;
      const normalized = normalizeCharacters(results);
      dispatch(setLoading(false));
      dispatch(updateEntities(normalized.entities));
      dispatch(
        fetchCharactersSuccess(normalized.result, {
          offset,
          limit,
          total,
          count
        })
      );
    });
  };
}
