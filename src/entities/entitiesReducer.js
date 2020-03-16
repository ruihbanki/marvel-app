import merge from "lodash/merge";

const initialState = {
  entities: {}
};

const entitiesReducer = (state, action) => {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case "UPDATE_ENTITIES": {
      const { entities } = action;
      const entitiesMerged = merge(state.entities, entities);
      return {
        ...state,
        entities: entitiesMerged
      };
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
