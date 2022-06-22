import { Col, Container, Row } from "react-bootstrap";
import full from '../../Assets/full.png';
import kris from '../../Assets/Kris.png';
import gina from '../../Assets/Gina.png';
import hans from '../../Assets/Crexthemage.png';
import jasper from '../../Assets/Jasper.png';
import nafy from '../../Assets/Nafy.png';
import sammo from '../../Assets/Sammo.png';

function About() {
    return (
      <section className='main'>
        <div className="about-sec">
          <Row>
              <Col md={6}>
                  <div class="about-img">
                     <img src={full} alt=''/>
                  </div>
              </Col>
              <Col md={6}>
                  <div class="about-txt">
                      <Container>
                          <h3>About<span>The FunGuys</span></h3>
                          <p>The FunGuys NFT project was created to bring fun, humor, 
                              and incredibly adorable artwork to the NFT space on the 
                              Cardano blockchain. Created by a team of 3 crypto, Cardano 
                              and NFT enthusiasts, we hope for this to be a project that our 
                              fellow NFT <span>enthusiasts</span> can get behind!  Not to mention, the 
                              passion behind mushrooms is large with this one. </p>
                      </Container>
                  </div>
              </Col>
          </Row>
        </div>
        <div className="meet-team-sec">
            <Container>
                <h3>Meet The Team</h3>
                <Row>
                    <Col md={4}>
                        <div className="team-img">
                        <img src={kris} alt=''/>
                        </div>
                    </Col>
                    <Col md={4}>
                    <h5>Kris</h5>
                    <p>The team lead over-seeing the project.  His love for mushrooms is apparent, as he has written 3 books 
                    about mushrooms <a href="https://www.amazon.com/kindle-dbs/entity/author/B097H684HG?_encoding=UTF8&node=2656022011&offset=0&pageSize=12&searchAlias=stripbooks&sort=author-sidecar-rank&page=1&langFilter=default#formatSelectorHeader" target="_blank">(check them out here)</a>! Kris is a big lover of the Cardano blockchain and NFTs. 
                    Passionate Liverpool football club and New England Patriots supporter!</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                    <h5>Gina</h5>
                <p>The talented artist behind the project. She is also a lover of mushrooms, so putting her art and mushrooms together was a no-brainer. </p>
                    </Col>
                    <Col md={4}>
                    <div className="team-img">
                        <img src={gina} alt=''/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className="team-img">
                        <img src={jasper} alt=''/>
                        </div>
                    </Col>
                    <Col md={4}>
                    <h5>Jasper</h5>
                     <p>The tech guy and crypto lover. He’s the chief behind all of the the back-end tech-y bits.</p>
                    </Col>
                </Row>
                <Row>
                   
                    <Col md={4}>
                    <h5>Nafy</h5>
                     <p>Discord admin</p>
                    </Col>
                    <Col md={4}>
                        <div className="team-img">
                        <img src={nafy} alt=''/>
                        </div>
                    </Col>
                </Row>
                <Row>
                <Col md={4}>
                    <div className="team-img">
                        <img src={sammo} alt=''/>
                        </div>
                    </Col>
                    <Col md={4}>
                    <h5>Sammo</h5>
                    <p>Social media manager</p>
                    </Col>
                    
                </Row>
                <Row>
                   
                    <Col md={4}>
                    <h5>Crexthemage</h5>
                     <p>Social media manager</p>
                    </Col>
                    <Col md={4}>
                        <div className="team-img">
                        <img src={hans} alt=''/>
                        </div>
                    </Col>
                </Row>
            </Container>
       </div>
      </section >
    );
  }
  
  export default About;
  