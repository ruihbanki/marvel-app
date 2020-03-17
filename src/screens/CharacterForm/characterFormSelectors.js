import { getEntity } from "../../entities/entitiesSelectors";

export const getLoading = state => {
  return state.ui.characterForm.loading;
};

export const getCharacter = (state, id) => {
  return getEntity(state, "characters", id);
};
