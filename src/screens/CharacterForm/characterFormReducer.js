import {
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_REQUEST,
  FETCH_CHARACTER_FAILURE
} from "./characterFormActions";

const initialState = {
  charactersIds: [],
  error: null,
  loading: false
};

const characterFormReducer = (state, action) => {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case FETCH_CHARACTER_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case FETCH_CHARACTER_FAILURE: {
      return {
        ...state,
        error: action.error,
        loading: false
      };
    }
    case FETCH_CHARACTER_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
};

export default characterFormReducer;
