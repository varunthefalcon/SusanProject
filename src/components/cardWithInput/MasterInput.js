import React, { Component, Fragment } from "react";
import Select from "react-select";

class MasterInput extends Component {
  state = {
    selectedValue: ""
  };
  handleChange = (newValue, { action, removedValue }) => {
    if (action === "clear") {
      this.setState({ selectedValue: "" });
      return;
    }
    this.setState({ selectedValue: newValue.label });
  };
  render() {
    console.log(this.state, 88888);

    return (
      <div>
        <Select
          // className="centerContent MainInput"
          maxMenuHeight={150}
          openMenuOnClick={false}
          placeholder={"Enter Something...."}
          name="color"
          value={this.state.selectedValue.label}
          onChange={this.handleChange}
          isClearable={true}
          options={[
            { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
            { value: "blue", label: "Blue", color: "#0052CC", disabled: true },
            { value: "purple", label: "Purple", color: "#5243AA" },
            { value: "red", label: "Red", color: "#FF5630", isFixed: true },
            { value: "orange", label: "Orange", color: "#FF8B00" },
            { value: "yellow", label: "Yellow", color: "#FFC400" },
            { value: "green", label: "Green", color: "#36B37E" },
            { value: "forest", label: "Forest", color: "#00875A" },
            { value: "slate", label: "Slate", color: "#253858" }
          ]}
        />
      </div>
    );
  }
}

export default MasterInput;
