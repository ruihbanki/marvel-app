import React from "react";
import { useSearchCharacters } from "./hooks/marvelHooks";

function App() {
  const { data: { results = [] } = {} } = useSearchCharacters();
  return (
    <div className="App">
      <ul>
        {results.map(characther => (
          <li>{characther.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
