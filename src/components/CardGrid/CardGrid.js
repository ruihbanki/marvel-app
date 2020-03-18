import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: 8
  },
  card: {
    width: 240,
    padding: 8,
    "& > div": {
      height: 340
    }
  }
}));

const CardGrid = React.memo(({ children }) => {
  const classes = useStyles();
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={classes.root}>
      {childrenArray.map((child, index) => (
        <div key={index} className={classes.card}>
          {child}
        </div>
      ))}
    </div>
  );
});

export default CardGrid;
