import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LineClamp from "../../../components/LineClamp";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 320
  },
  media: {
    height: 140
  }
});

const CharacterCard = ({ character, onClick }) => {
  const classes = useStyles();
  const thumbnail = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  const handleClick = () => {
    onClick(character);
  };
  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={thumbnail}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {character.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <LineClamp lines={3}>{character.description}</LineClamp>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
