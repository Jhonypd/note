import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const NavbarNotes = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      expanded={expanded}
      onToggle={handleToggle}
      className="bg-white shadow-sm rounded-[10px]"
    >
      <Container fluid className="justify-between">
        <Link
          to={"/"}
          aria-label="Direciona para pagina inicial"
          className="no-underline text-slate-900"
        >
          <Logo />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="text-sm p-1" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto flex justify-center items-center">
            <Nav.Link
              as={Link}
              to="/"
              onClick={handleClose}
              aria-label="Ir para o início da página"
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/notas"
              onClick={handleClose}
              aria-label="Ir para a seção de Notas"
            >
              Notas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarNotes;
