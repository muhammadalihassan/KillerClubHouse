// SITE LOGO
import sitelogo from '../Assets/mainlogo.png';
import pdf from '../Assets/Whitepaper.pdf';

import { Navbar, Nav, Container, NavDropdown, Form, Button, Dropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from "react-router-dom";


function Header() {
    return (
      <Navbar  expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h2><span>The</span> FunGuys</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey="/" className="">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            {/* <Nav.Link as={Link} to="/minthere" >MINT HERE</Nav.Link> */}
            <Nav.Link as={Link} to="/utility" >Utility</Nav.Link>
            <Nav.Link as={Link} to="/about" >About</Nav.Link>
            <Nav.Link as={Link} to={pdf} target="_blank">Fun-paper</Nav.Link>
            <Nav.Link as={Link} to="/staking" >Staking</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/roadmap" key="1">Roadmap</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/faq" key="2">FAQ's</NavDropdown.Item>
        </NavDropdown>
          </Nav>
          <div className='nav-wallet'>
              <div className='nav-profile'>
                <a href='https://discord.com/invite/HuCUdN48TB' className='all-btns' target="_blank">
                  <span>Discord</span>
                </a>
              </div>
              <div className='nav-wall'>
              <a href='https://twitter.com/FunGuysCNFT' className='all-btns' target="_blank">
                  <span>Twitter</span>
                </a>
              </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  
  export default Header;
  