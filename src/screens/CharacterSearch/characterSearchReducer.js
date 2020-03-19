import {
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_FAILURE
} from "./characterSearchActions";

const initialState = {
  charactersIds: [],
  pagination: {
    offset: 0,
    limit: 20,
    total: 0,
    count: 0
  },
  error: null,
  loading: false
};

const characterSearchReducer = (state, action) => {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case FETCH_CHARACTERS_FAILURE: {
      return {
        ...state,
        error: action.error,
        loading: false
      };
    }
    case FETCH_CHARACTERS_SUCCESS: {
      return {
        ...state,
        charactersIds: action.data,
        pagination: action.pagination,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
};

export default characterSearchReducer;
