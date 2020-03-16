import { normalize, schema } from "normalizr";

const character = new schema.Entity("characters");
const characters = [character];

export const normalizeCharacters = data => {
  return normalize(data, characters);
};
