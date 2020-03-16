import { normalizeCharacters } from "../config/normalize";

const initialState = {
  charactersById: {}
};

const characterReducer = (state, action) => {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case "ADD_CHARACTERS": {
      const {
        data: { results }
      } = action;
      const ch = normalizeCharacters(results);
      console.log(results, ch);
      return state;
    }
    case "REMOVE_CHARACTER": {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default characterReducer;
