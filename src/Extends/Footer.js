import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
// SITE LOGO
import sitelogo from '../Assets/logo.png';

function Footer() {
  return (
    <section class="main-footer">
    <>
  <Container>
       <Row>
       <Col md={12}>
       <div className="ftr-logo">
         <img src={sitelogo} alt='logo'/>
         </div>
         <div className="social-icons">
              <div className="ftr-icon">
              <a href="https://discord.gg/VTXU7BXhde"><FontAwesomeIcon icon={brands('discord')} /></a>
              <a href="https://instagram.com/killerclubhouse?r=nametag"><FontAwesomeIcon icon={brands('instagram')} /></a>
              <a href="https://twitter.com/killerclubhouse"><FontAwesomeIcon icon={brands('twitter')} /></a>
              
              </div>
            </div>
              <div class="copy-right">
             <div class="container">
                 <p>Copyright © 2022 Killer Club House - All Rights Reserved.</p>
          </div>
                </div>
       </Col>

        </Row>
        </Container>
  </>

</section>
  );
}

export default Footer;
