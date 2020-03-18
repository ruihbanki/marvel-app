import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: props => ({
    display: "box",
    lineClamp: props.lines,
    boxOrient: "vertical",
    overflow: "hidden"
  })
});

const LineClamp = React.memo(props => {
  const { children } = props;
  const classes = useStyles(props);
  return <p className={classes.root}>{children}</p>;
});

LineClamp.propTypes = {
  lines: PropTypes.number
};

LineClamp.defaultProps = {
  lines: 1
};

export default LineClamp;
