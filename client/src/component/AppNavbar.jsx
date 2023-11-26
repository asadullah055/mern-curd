import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Link className="fs-4 text-white text-decoration-none" to="/">
          e-school
        </Link>
        <Nav className="me-auto w-75 justify-content-center">
          <NavLink className="nav-link fs-6 fw-semibold" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link fs-6 fw-semibold" to="/save">
            Registration
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
