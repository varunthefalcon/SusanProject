import React, { Fragment } from "react";
import MasterInput from "./MasterInput";
import RenderImage from "./renderImage";
import { IMAGE_API_URL } from "../helpers/constants";

function MediaCard(props) {
  return (
    <Fragment>
      <div style={{ maxWidth: "300px", padding: "20px" }}>
        <RenderImage srcURL={IMAGE_API_URL + "label"} />
        <MasterInput />
      </div>
    </Fragment>
  );
}

export default MediaCard;
