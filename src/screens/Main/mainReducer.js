import { MAIN_SET_LOADING, MAIN_SET_SNACKBAR } from "./mainActions";

const initialState = {
  loading: false,
  snackbarMessage: null
};

const mainReducer = (state, action) => {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case MAIN_SET_LOADING: {
      return {
        ...state,
        loading: action.loading
      };
    }
    case MAIN_SET_SNACKBAR: {
      return {
        ...state,
        snackbarMessage: action.message
      };
    }
    default: {
      return state;
    }
  }
};

export default mainReducer;
