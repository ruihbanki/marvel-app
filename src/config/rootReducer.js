import { combineReducers } from "redux";
import entitiesReducer from "../entities/entitiesReducer";
import characterSearchReducer from "../screens/CharacterSearch/characterSearchReducer";
import characterFormReducer from "../screens/CharacterForm/characterFormReducer";
import mainReducer from "../screens/Main/mainReducer";

const uiReducer = combineReducers({
  main: mainReducer,
  characterSearch: characterSearchReducer,
  characterForm: characterFormReducer
});

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer
});

export default rootReducer;
