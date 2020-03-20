export const UPDATE_ENTITIES = "UPDATE_ENTITIES";
export const UPDATE_ENTITY = "UPDATE_ENTITY";

export function updateEntities(entities) {
  return {
    type: UPDATE_ENTITIES,
    entities
  };
}

export function updateEntity(entityType, id, entity) {
  return {
    type: UPDATE_ENTITY,
    entityType,
    id,
    entity
  };
}
