import React, { useContext } from "react";
import Button from "./Button";
import IMGContainer from "./IMGContainer";
import { CardStyled } from "./ProductCard.style";
import { ShopContext } from "../context/shop-context";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addItem, cartItems } = useContext(ShopContext);

  const cartItemsAmount = cartItems[id];
  return (
    <CardStyled>
      <IMGContainer productImage={productImage} />
      <div>
        <p>{productName}</p>
        <p>${price}</p>
        <Button onClick={() => addItem(id)} />
      </div>
    </CardStyled>
  );
};

export default Product;
