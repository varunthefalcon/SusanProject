import React, { Component } from "react";
import Select from "react-select";

class MasterInput extends Component {
  state = {
    selectedValue: "",
    autocompleteJSON: [],
    cardData: {},
    pristine: true
  };
  styles = {
    correct: { boxShadow: "0 0 60px 2px green" },
    incorrect: { boxShadow: "0 0 60px 2px red" }
  };
  componentWillReceiveProps(nextprops) {
    const { autocompleteJSON, cardData } = nextprops;
    this.setState({ autocompleteJSON: autocompleteJSON, cardData: cardData });
  }
  componentDidMount() {
    const { autocompleteJSON, cardData } = this.props;
    this.setState({ autocompleteJSON: autocompleteJSON, cardData: cardData });
  }
  handleChange = (newValue, { action }) => {
    if (action === "clear") {
      this.setState({ selectedValue: "", pristine: true });
      return;
    }
    this.setState({ selectedValue: newValue.label, pristine: false });
  };
  shuffleArray = array => {
    let newArray = array;
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
  render() {
    console.log(this.state, 88888, this.props);
    const { pristine, selectedValue, cardData, autocompleteJSON } = this.state;
    const styleColor =
      (!pristine &&
        (selectedValue === cardData.value
          ? this.styles.correct
          : this.styles.incorrect)) ||
      null;
    return (
      <div style={styleColor}>
        <Select
          maxMenuHeight={150}
          openMenuOnClick={false}
          placeholder={"Choose your answer...."}
          name="color"
          value={this.state.selectedValue.label}
          onChange={this.handleChange}
          isClearable={true}
          options={this.shuffleArray(autocompleteJSON)}
        />
      </div>
    );
  }
}

export default MasterInput;
