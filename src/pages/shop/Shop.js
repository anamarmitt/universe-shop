import React from "react";
import Galaxy from "../../components/Galaxy";
import Product from "../../components/ProductCard";
import { Wrapper } from "../../components/Wrapper.style";
import { PRODUCTS } from "../../products";

function Shop() {
  return (
    <section>
      <div
        style={{ display: "flex", justifyContent: "center", color: "#7c7c7c" }}
      >
        <h1 style={{ fontFamily: "Roboto", fontWeight: "300" }}>
          To the Infinite and Beyond
        </h1>
      </div>
      <Wrapper>
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </Wrapper>
      <Galaxy />
    </section>
  );
}

export default Shop;
