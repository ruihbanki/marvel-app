const initialState = {
  charactersIds: []
};

const characterSearchReducer = (state, action) => {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case "RECEIVE_CHARACTERS": {
      return {
        ...state,
        charactersIds: action.data
      };
    }
    case "SAVE": {
      console.log("==============sdxccd");
      return state;
    }
    default: {
      return state;
    }
  }
};

export default characterSearchReducer;
