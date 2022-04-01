import react from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Container, Nav} from 'react-bootstrap';

function Mainnav(params) {
   return(
      <section className="nav-sec sticky-top">
         <Navbar bg="light" expand="lg">
            <Container>
               <Navbar.Brand href="#home"><Link to="/" style={{textDecoration: 'none'}} className="text-muted">CRYPTO</Link></Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="#home"><Link to="/" style={{textDecoration: 'none'}} className="text-muted">Home</Link></Nav.Link>
                     <Nav.Link href="#link">Link</Nav.Link>
                     <Nav.Link href="#link">Coins</Nav.Link>
                     <Nav.Link href="#link">Nfts</Nav.Link>
                     <Nav.Link href="#link">Currencies</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </section>
   )
}

export default Mainnav