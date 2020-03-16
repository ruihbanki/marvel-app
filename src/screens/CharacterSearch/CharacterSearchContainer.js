import React, { useEffect } from "react";
import CharacterSearch from "./CharacterSearch";
import { connect } from "react-redux";
import { fetchCharacters } from "./characterSearchActions";
import { getCharacters } from "./characterSearchSelectors";

const CharacterSearchContainer = React.memo(
  ({ characters, fetchCharacters }) => {
    useEffect(() => {
      fetchCharacters();
    }, [fetchCharacters]);
    return <CharacterSearch characters={characters} />;
  }
);

const mapStateToProps = state => {
  return {
    characters: getCharacters(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: () => {
      dispatch(fetchCharacters());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterSearchContainer);
