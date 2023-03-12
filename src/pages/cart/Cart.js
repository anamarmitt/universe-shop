import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "../../components/CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();

  const navigate = useNavigate();

  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#7c7c7c",
        }}
      >
        <h1 style={{ fontFamily: "Roboto", fontWeight: "300" }}>
          Your Cart Items
        </h1>
      </div>
      <div>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div>
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: "300",
              color: "#7c7c7c",
              fontSize: "1.1rem",
              textAlign: "center",
            }}
          >
            Subtotal: ${totalAmount}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontSize: "1rem",
              margin: "10px",
            }}
          >
            <button
              style={{
                margin: "4px",
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid #fff",
                padding: "4px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
            <button
              style={{
                margin: "4px",
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid #fff",
                padding: "4px",
                cursor: "pointer",
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1
          style={{
            fontFamily: "Roboto",
            fontWeight: "300",
            color: "#7c7c7c",
            fontSize: "1.2rem",
            textAlign: "center",
          }}
        >
          Your Cart is Empty
        </h1>
      )}
    </div>
  );
}

export default Cart;
