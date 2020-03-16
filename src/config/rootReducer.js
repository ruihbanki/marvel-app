import { combineReducers } from "redux";
import characterReducer from "../entities/characterReducer";
import characterSearchReducer from "../screens/CharacterSearch/characterSearchReducer";

const entitiesReducer = combineReducers({
  character: characterReducer
});

const uiReducer = combineReducers({
  character: characterSearchReducer
});

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer
});

export default rootReducer;
