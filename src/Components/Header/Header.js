import React from "react";
import "./Header.css";

import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
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
            <NavLink className="NavLink" href="#">
              Something
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
export default Header;
