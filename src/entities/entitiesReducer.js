import merge from "lodash/merge";

const initialState = {
  characters: {}
};

const entitiesReducer = (state, action) => {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case "UPDATE_ENTITIES": {
      const { entities } = action;
      return merge(state, entities);
    }
    case "DELETE_ENTITY": {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default entitiesReducer;
