import React from "react";
import { Switch, Route } from "react-router-dom";
import CharacterSearch from "./screens/CharacterSearch";

function App() {
  return (
    <Switch>
      <Route path="/" component={CharacterSearch} />
    </Switch>
  );
}

export default App;
