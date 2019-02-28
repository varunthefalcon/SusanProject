import React, { Component, Fragment } from "react";
import CardWithInput from "../cardWithInput";
import Grid from "@material-ui/core/Grid";
import { PRACTICE_SENTENCES } from "../helpers/constants";
class Practice extends Component {
  state = {
    taskSentence:
      PRACTICE_SENTENCES[Math.floor(Math.random() * PRACTICE_SENTENCES.length)],
    submittedAnswer: []
  };
  render() {
    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <CardWithInput />
          </Grid>
          <Grid item xs={3}>
            <CardWithInput />
          </Grid>
          <Grid item xs={3}>
            <CardWithInput />
          </Grid>
          <Grid item xs={3}>
            <CardWithInput />
          </Grid>
          <Grid item xs={3}>
            <CardWithInput />
          </Grid>
          <Grid item xs={3}>
            <CardWithInput />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default Practice;
