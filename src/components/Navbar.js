import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { FaBars, FaCartPlus } from "react-icons/fa";
import logo from "../images/logo.svg";
export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSideBar, handleCart } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars onClick={handleSideBar} className="nav-icon" />
              <img src={logo} alt="tech store logo"></img>
              <div className="nav-cart">
                <FaCartPlus
                  onClick={handleCart}
                  className="nav-icon"
                ></FaCartPlus>
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const NavWrapper = styled.nav`

position : -webkit-sticky;
position: sticky;
top:0;
width:100%;
padding : 1rem 1.5rem;
background : var(--mainGrey);
border-bottom : 3px solid var(--primaryColor);
.nav-center{
  display : flex;
  align-items : center;
  justify-content : space-between;
  max-width : 1170px;
  margin : 0 auto;


}

.nav-icons{
  font-size : 1.5rem;
  cursor: pointer;
}

.cart-items{
  background : var(--primaryColor);
  color : var(--mainWhite);
  font-size : 0.85rem;
  position:absolute;
  top: -8px;
  right : -8px;
  padding : 0 5px;
  border-radius : 50%;
}

.nav-cart{
  position:relative;

}
`;
