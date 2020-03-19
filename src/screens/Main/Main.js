import React from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import CloseIcon from "@material-ui/icons/Close";
import CharacterSearch from "../CharacterSearch";
import CharacterForm from "../CharacterForm";
import { getSnackbarMessage } from "./mainSelectors";
import { useSelector, useDispatch } from "react-redux";
import { hideSnackbar } from "./mainActions";

const Main = React.memo(() => {
  const dispatch = useDispatch();

  const snackbarMessage = useSelector(getSnackbarMessage);

  const handleClose = () => {
    dispatch(hideSnackbar());
  };

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
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={Boolean(snackbarMessage)}
        onClose={handleClose}
        message={snackbarMessage}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </>
  );
});

export default Main;
