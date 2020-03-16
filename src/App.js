import React from "react";
import { Switch, Route } from "react-router-dom";
import CharacterSearch from "./screens/CharacterSearch";
import CharacterForm from "./screens/CharacterForm";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={CharacterSearch} />
      <Route path="/character/:id" component={CharacterForm} />
    </Switch>
  );
}

export default App;
