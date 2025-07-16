import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
   const common = {
    marginRight: 15,
    fontSize: 17,
    letterSpacing: .5
   }
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <div>
            <h2 className="mt-1 h2_right" style={{ color: "#04040eff" }}>
              <Navbar.Brand href="#home" style={{color:"#6c63ff"}}>Devraj Jangid</Navbar.Brand>
              
            </h2>
          </div>
          <Nav className="">
            <div className="mt-2">
              <NavLink to="/" className="text-decoration-none" style={common}>
                Home
              </NavLink>
              <NavLink to="/about" className="text-decoration-none" style={common}>
                About
              </NavLink>
              <NavLink to="/contact" className="text-decoration-none" style={common}>
                Contact
              </NavLink>
              <NavLink to="/project" className="text-decoration-none" style={common}>
                Project
              </NavLink>
            </div>
          </Nav>
          <div></div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
