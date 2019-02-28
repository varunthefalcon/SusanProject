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
    this.setState({
      taskSentence: taskSentence,
      autocompleteJSON: autocompleteJSON
    });
  }
  shuffleArray = array => {
    let newArray = array;
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
  render() {
    console.log(this.state);
    const { autocompleteJSON } = this.state;
    return (
      <Fragment>
        <Grid container spacing={24}>
          {autocompleteJSON.map((data, index) => (
            <Fragment key={index}>
              <Grid item xs={3}>
                <CardWithInput
                  cardData={data}
                  autocompleteJSON={autocompleteJSON}
                />
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Fragment>
    );
  }
}

export default Practice;
