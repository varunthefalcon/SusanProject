import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class index extends Component {
  render() {
    return (
      <Fragment>
        <Link to="/test">
          <Button variant="contained" color="primary">
            Take a Test
          </Button>
        </Link>
        <Link to="/practice">
          <Button variant="contained" color="primary">
            Lets Practice
          </Button>
        </Link>
      </Fragment>
    );
  }
}

export default index;
