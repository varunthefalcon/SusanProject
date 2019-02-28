import React, { Component, Fragment } from "react";
import CardWithInput from "../cardWithInput";
import Grid from "@material-ui/core/Grid";
import { PRACTICE_SENTENCES } from "../helpers/constants";
class Practice extends Component {
  state = {
    taskSentence: "",
    submittedAnswer: [],
    autocompleteJSON: []
  };

  componentDidMount() {
    let taskSentence =
      PRACTICE_SENTENCES[Math.floor(Math.random() * PRACTICE_SENTENCES.length)];

    let autocompleteJSON = taskSentence
      .split(" ")
      .map(word => Object.assign({}, { value: word }, { label: word }));
    console.log(6666, { taskSentence, autocompleteJSON });
    this.setState({
      taskSentence: taskSentence,
      autocompleteJSON: autocompleteJSON
    });
  }
  render() {
    console.log(this.state);
    const { autocompleteJSON } = this.state;
    return (
      <Fragment>
        <Grid container spacing={24}>
          {autocompleteJSON.map(data => (
            <Grid item xs={3}>
              <CardWithInput
                cardData={data}
                autocompleteJSON={autocompleteJSON}
              />
            </Grid>
          ))}
        </Grid>
      </Fragment>
    );
  }
}

export default Practice;
