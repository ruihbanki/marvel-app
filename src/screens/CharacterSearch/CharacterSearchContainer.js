import React, { useEffect } from "react";
import CharacterSearch from "./CharacterSearch";
import { connect } from "react-redux";
import { fetchCharacters } from "./characterSearchActions";

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
    characters: state.ui.characterSearch.charactersIds
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
