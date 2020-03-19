import { MAIN_SET_LOADING } from "./mainActions";

const initialState = {
  loading: false
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
    default: {
      return state;
    }
  }
};

export default mainReducer;
