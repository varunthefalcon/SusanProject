import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
  // title: {
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   marginRight: theme.spacing.unit * 2,
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing.unit * 3,
  //     width: 'auto',
  //   },
  // },
  // title: {
  //   width: theme.spacing.unit * 9,
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

function AppHeader(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Link to="/">
            <Typography variant="h3" className={classes.title}>
              Lets Learn
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppHeader);
