// SITE LOGO
import sitelogo from '../Assets/logo-main.png';

import { Navbar, Nav, Container, NavDropdown, Form, Button, Dropdown, FormControl } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
      <div className='main-header'>
         <Container>
          <div className='top-header'>
            <ul>
              <li>
                <a href='#'>
                   <FontAwesomeIcon icon={brands('facebook-f')} />
                </a>
              </li>
              <li>
                <a href='#'>
                   <FontAwesomeIcon icon={brands('twitter')} />
                </a>
              </li>
              <li>
                <a href='#'>
                   <FontAwesomeIcon icon={brands('instagram')} />
                </a>
              </li>
              <li>
                <a href='#'>
                   <FontAwesomeIcon icon={brands('discord')} />
                </a>
              </li>
            </ul>
          </div>
         <Navbar expand="lg" variant="dark">
         <Navbar.Brand as={Link} to="/" className='mob-view'>
            <div className='logo-main'>
          <img src={sitelogo} alt='' className='bimg-3'/>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Item>
              <NavLink exact to="/">home</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink exact to="/">story</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink exact to="/">road</NavLink>
            </Nav.Item>
            <Navbar.Brand as={Link} to="/" className='des-view'>
            <div className='logo-main'>
          <img src={sitelogo} alt='' className='bimg-3'/>
          </div>
        </Navbar.Brand>
            <Nav.Item>
              <NavLink exact to="/">FAQ's</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink exact to="/">team</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      </Container>
      </div>
     
     
    );
  }
  
  export default Header;
  