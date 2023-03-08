import React from "react";
import { IMGStyled } from "./IMGContainer.style";

function IMGContainer(props) {
  return (
    <IMGStyled>
      <img style={{ height: "100%", width: "100%" }} src={props.productImage} />
    </IMGStyled>
  );
}

export default IMGContainer;
