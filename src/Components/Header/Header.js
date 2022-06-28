import React from "react";
import "./Header.css";

import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarBrand,
} from "reactstrap";
import Logo from "../../assests/logo.png";
const Header = () => {
  return (
    <div className="Navigation">
      <Navbar style={{ backgroundColor: "#8B0000", height: "80px" }}>
        <NavbarBrand href="/" className="mr-auto  ml-md-5 Brand">
          <img src={Logo} alt="Logo" width="70px" mt-5 />
        </NavbarBrand>
        <Nav className="mr-md-5">
          <NavItem>
            <NavLink className="NavLink" exact to="/">
              {" "}
              BurgerBuilder
            </NavLink>
            <NavLink className="NavLink" exact to="/orders">
              Orders
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
export default Header;
