import merge from "lodash/merge";
import { UPDATE_ENTITIES, UPDATE_ENTITY } from "./entitiesActions";

const initialState = {
  characters: {}
};

const entitiesReducer = (state, action) => {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case UPDATE_ENTITIES: {
      const { entities } = action;
      return merge(entities, state);
    }
    case UPDATE_ENTITY: {
      return {
        ...state,
        [action.entityType]: {
          ...state[action.entityType],
          [action.id]: action.entity
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default entitiesReducer;
