import React, { Component, Fragment } from "react";
import Select from "react-select";

class MasterInput extends Component {
  state = {
    selectedValue: "",
    autocompleteJSON : []
  };
  componentWillReceiveProps(nextprops) {
    const { autocompleteJSON } = nextprops;
    this.setState({autocompleteJSON : autocompleteJSON})
  }
  componentDidMount() {
    const { autocompleteJSON } = this.props;
    this.setState({autocompleteJSON : autocompleteJSON})
  }
  handleChange = (newValue, { action, removedValue }) => {
    if (action === "clear") {
      this.setState({ selectedValue: "" });
      return;
    }
    this.setState({ selectedValue: newValue.label });
  };
  render() {
    console.log(this.state, 88888, this.props);

    return (
      <div>
        <Select
          maxMenuHeight={150}
          openMenuOnClick={false}
          placeholder={"Enter Something...."}
          name="color"
          value={this.state.selectedValue.label}
          onChange={this.handleChange}
          isClearable={true}
          options={this.state.autocompleteJSON}
        />
      </div>
    );
  }
}

export default MasterInput;
