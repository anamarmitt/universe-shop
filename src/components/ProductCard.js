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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Button onClick={() => addItem(id)} />
          {cartItemsAmount > 0 && (
            <div
              style={{
                border: "1px solid #fff",
                borderRadius: "5px",
                padding: "6px",
                fontSize: "1.2rem",
              }}
            >
              {cartItemsAmount}
            </div>
          )}
        </div>
      </div>
    </CardStyled>
  );
};

export default Product;
