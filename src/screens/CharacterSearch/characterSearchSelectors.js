import { getEntity } from "../../entities/entitiesSelectors";

export const getLoading = state => {
  return state.ui.characterSearch.loading;
};

export const getCharacters = state => {
  return state.ui.characterSearch.charactersIds.map(id =>
    getEntity(state, "characters", id)
  );
};
