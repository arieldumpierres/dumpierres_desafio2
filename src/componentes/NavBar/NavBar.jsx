import './NavBar.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Widget from '../Widgets/Widget'





function NavBar() {
  return (
    <>
    
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Essen by Friends</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Sobre Nosotras</Nav.Link>
      <Nav.Link href="#pricing">Sobre Essen</Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Cacerolas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Sartenes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Fuentes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Biferas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Flip</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.6">Complementos</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">
      
      <Widget/>
    
     </Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    </>
  )
}

export default NavBar