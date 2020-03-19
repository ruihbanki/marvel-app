export function updateEntities(entities) {
  return {
    type: "UPDATE_ENTITIES",
    entities
  };
}

export function updateEntity(entityType, id, entity) {
  return {
    type: "UPDATE_ENTITY",
    entityType,
    id,
    entity
  };
}
