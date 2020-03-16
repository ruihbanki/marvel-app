const initialState = {
  charactersById: {}
};

const characterSearchReducer = (state, action) => {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case "FETCH": {
      return state;
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
