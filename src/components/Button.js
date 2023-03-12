import React, { useContext } from "react";
import { ButtonStyled } from "./Button.style";

function Button({ onClick }) {
  return <ButtonStyled onClick={onClick}>Add to Cart</ButtonStyled>;
}

export default Button;
