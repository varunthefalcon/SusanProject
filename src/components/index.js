import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class index extends Component {
  render() {
    return (
      <Fragment>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={24}
        >
          <Grid item>
            <Link to="/test">
              <Button variant="contained" color="primary">
                Take a Test
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/practice">
              <Button variant="contained" color="primary">
                Lets Practice
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={24}
        />
      </Fragment>
    );
  }
}

export default index;
