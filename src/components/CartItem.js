import React, { useContext } from "react";
import IMGContainer from "./IMGContainer";
import { ShopContext } from "../context/shop-context";

function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const { addItem, cartItems, removeItem } = useContext(ShopContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "1px solid #7c7c7c",
        marginBottom: "1rem",
      }}
    >
      <div style={{ width: "200px" }}>
        <IMGContainer productImage={productImage} />
        <div style={{ fontFamily: "Roboto" }}>
          <p>{productName}</p>
          <p>${price}</p>
          <div>
            <button
              style={{
                width: "20px",
                margin: "4px",
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid #fff",
              }}
              onClick={() => removeItem(id)}
            >
              -
            </button>
            <input
              value={cartItems[id]}
              style={{
                width: "20px",
                margin: "4px",
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid #fff",
                textAlign: "center",
              }}
            />
            <button
              style={{
                width: "20px",
                margin: "4px",
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid #fff",
              }}
              onClick={() => addItem(id)}
            >
              {" "}
              +{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
