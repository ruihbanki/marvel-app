import React from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CharacterSearch from "../CharacterSearch";
import CharacterForm from "../CharacterForm";

const Main = React.memo(() => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Characters Marvel</Typography>
        </Toolbar>
      </AppBar>
      <Box p={4} mt={8}>
        <Switch>
          <Route path="/" exact component={CharacterSearch} />
          <Route path="/character/:id" component={CharacterForm} />
        </Switch>
      </Box>
    </>
  );
});

export default Main;
