import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getCharacter } from "./characterFormSelectors";
import { fetchCharacter, saveCharacter } from "./characterFormActions";

const CharacterForm = React.memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();

  const character = useSelector(state => getCharacter(state, id)) || {};

  const [formData, setFormData] = useState(character);

  const handleChangeInput = event => {
    const { name, value } = event.target;
    setFormData(d => ({
      ...d,
      [name]: value
    }));
  };

  const handleCancel = () => {
    history.push("/");
  };

  const handleSave = event => {
    event.preventDefault();
    dispatch(saveCharacter(formData));
  };

  useEffect(() => {
    dispatch(fetchCharacter(id));
  }, [dispatch, id]);

  useEffect(() => {
    setFormData(character);
  }, [character]);

  return (
    <div>
      <Typography component="h1" variant="h3">
        {character.name}
      </Typography>
      <br />
      <form onSubmit={handleSave}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              name="name"
              label="Name"
              value={formData.name}
              fullWidth
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Description"
              value={formData.description}
              fullWidth
              multiline
              rows={4}
              onChange={handleChangeInput}
            />
          </Grid>
        </Grid>
        <br />
        <Button
          type="button"
          variant="contained"
          color="default"
          onClick={handleCancel}
        >
          Cancelar
        </Button>{" "}
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
    </div>
  );
});

export default CharacterForm;
