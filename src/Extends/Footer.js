import sitelogo from '../Assets/logo-main.png';
import { Container, Row, Col, Form, Button, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import React, { Component, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import Section from './Switch.js'

// SITE LOGO


function Footer() {
  const [expanded, setExpanded] = useState(false);


  const setExpand = () => {
    setExpanded(false);
    // window.scrollTo(0, 0);
  }
  return (
    <div className="main-footer">
      <Container>
      <div className="footer-top">
        <img src={sitelogo} />
        <Nav >
          <Nav.Link exact='true' href={'#home'}>Home</Nav.Link>
                <Nav.Link exact='true' href={'#story'} >story</Nav.Link>
                <Nav.Link exact='true' href={'#road'} >roadmap</Nav.Link>
                <Nav.Link exact='true' href={'#team'} >team</Nav.Link>
                <Nav.Link exact='true' href={'#faq'} >FAQ's</Nav.Link>
                {/* as={Link} to={'/'} */}
          </Nav>
      </div>
      <div className='footer-btm'>
        <p>© 2022 Lorem Ipsum. All Rights Reserved</p>
        <ul>
              <li>
                <a href='#' className='twt'>
                   <FontAwesomeIcon icon={brands('twitter')} />
                </a>
              </li>
              <li>
                <a href='#' className='twi'>
                   <FontAwesomeIcon icon={brands('discord')} />
                </a>
              </li>
        </ul>
      </div>
      </Container>
    </div>
  );
}

export default Footer;
