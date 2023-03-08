import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { NavBarStyled } from "./navbar.style";

export const Navbar = () => {
  return (
    <div>
      <NavBarStyled>
        <Link
          style={{
            color: "#7c7c7c",
            textDecoration: "none",
            fontWeight: "300",
          }}
          to="/"
        >
          Shop
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/cart">
          <ShoppingCart size={28} />
        </Link>
      </NavBarStyled>
    </div>
  );
};
