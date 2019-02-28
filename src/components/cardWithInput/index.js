import React, { Fragment } from "react";
import MasterInput from "./MasterInput";
import RenderImage from "./renderImage";
import { IMAGE_API_URL } from "../helpers/constants";

function MediaCard(props) {
  const { autocompleteJSON, cardData } = props;
  console.log(props, 7777)
  return (
    <Fragment>
      <div style={{ maxWidth: "300px", padding: "20px" }}>
        <RenderImage srcURL={IMAGE_API_URL + cardData.label} />
        <MasterInput cardData={cardData} autocompleteJSON={autocompleteJSON}/>
      </div>
    </Fragment>
  );
}

export default MediaCard;
