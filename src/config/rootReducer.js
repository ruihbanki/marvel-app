import { combineReducers } from "redux";
import characterSearchReducer from "../screens/CharacterSearch/characterSearchReducer";
import entitiesReducer from "../entities/entitiesReducer";

const uiReducer = combineReducers({
  characterSearch: characterSearchReducer
});

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer
});

export default rootReducer;
