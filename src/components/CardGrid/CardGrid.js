import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: -8,
    marginRight: -8
  },
  card: {
    width: 240,
    padding: 8
  }
}));

const CardGrid = React.memo(({ children, ...others }) => {
  const classes = useStyles();
  const childrenArray = React.Children.toArray(children);

  return (
    <Box className={classes.root} {...others}>
      {childrenArray.map((child, index) => (
        <div key={index} className={classes.card}>
          {child}
        </div>
      ))}
    </Box>
  );
});

export default CardGrid;
