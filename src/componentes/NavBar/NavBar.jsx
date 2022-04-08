
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Widget from "../Widgets/Widget";


function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/">Essen by Friends</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavLink to="categoria/Cacerolas">Cacerolas</NavLink>
                <NavDropdown.Divider />
                <NavLink to="categoria/Sartenes">Sartenes</NavLink>
                <NavDropdown.Divider />
                <NavLink to="categoria/Fuentes">Fuentes</NavLink>
                <NavDropdown.Divider />
                <NavLink to="categoria/Biferas">Biferas</NavLink>
                <NavDropdown.Divider />
                <NavLink to="categoria/Flip">Flip</NavLink>
                <NavDropdown.Divider />
                <NavLink to="categoria/Complementos">Complementos</NavLink>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavLink
                to="cart"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Widget />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
