import React from "react";

const CharacterSearch = React.memo(({ characters }) => {
  console.log(characters);

  return (
    <div>
      CharacterSearch
      <ul>
        {characters.map(c => (
          <li>{c}</li>
        ))}
      </ul>
    </div>
  );
});

export default CharacterSearch;
