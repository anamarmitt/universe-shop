import React, { useContext } from "react";
import { ButtonStyled } from "./Button.style";
import { ShopContext } from "../context/shop-context";

function Button() {
  //const { id } = props.data;

  //const { addItem, cartItems } = useContext(ShopContext);

  //const cartItemsAmount = cartItems[id];

  return <ButtonStyled> Add to Cart</ButtonStyled>;
}

export default Button;
