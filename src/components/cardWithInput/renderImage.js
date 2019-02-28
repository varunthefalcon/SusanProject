import React, { Component } from "react";

class RenderImage extends Component {
  render() {
    let { srcURL, label, className } = this.props;
    return (
      <div className={className}>
        {this.props.label !== "" && (
          <img style={{ width: "100%" }} src={srcURL} alt={label} />
        )}
      </div>
    );
  }
}
export default RenderImage;
