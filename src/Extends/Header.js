// SITE LOGO
import React, { Component, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import sitelogo from '../Assets/logo-main.png';
import video from '../Assets/bg.m4v';
import { Navbar, Nav, Container, NavDropdown, Form, Button, Dropdown, FormControl } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link, NavLink } from "react-router-dom";
import Section from './Switch.js'
function Header() {
  const [expanded, setExpanded] = useState(false);


  const setExpand = () => {
    setExpanded(false);
    // window.scrollTo(0, 0);
  }
    return (
     
      <div className='main-header'>
         <div className='bg-video'>

        <video loop autoplay="" muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
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
                   <FontAwesomeIcon icon={brands('twitch')} />
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
          <Nav.Link exact='true' as={Link} to={'/'} >Home</Nav.Link>
                <Nav.Link exact='true' href={'#story'} >story</Nav.Link>
                <Nav.Link exact='true' href={'#road'} >road</Nav.Link>
                <Navbar.Brand as={Link} to="/" className='des-view'>
            <div className='logo-main'>
          <img src={sitelogo} alt='' className='bimg-3'/>
          </div>
        </Navbar.Brand>
                <Nav.Link exact='true' href={'#faq'} >FAQ's</Nav.Link>
                <Nav.Link exact='true' href={'#team'} >team</Nav.Link>
                <Link to="/" className='wht-btn'>connect to wallet</Link>
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      </Container>
      </div>
     
     
    );
  }
  
  export default Header;
  