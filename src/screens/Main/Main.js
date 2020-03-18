import React from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CharacterSearch from "../CharacterSearch";
import CharacterForm from "../CharacterForm";

const Main = React.memo(() => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Characters Marvel</Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/" exact component={CharacterSearch} />
        <Route path="/character/:id" component={CharacterForm} />
      </Switch>
    </div>
  );
});

export default Main;
