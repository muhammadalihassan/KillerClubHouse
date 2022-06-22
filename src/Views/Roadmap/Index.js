import { Col, Container, Row } from "react-bootstrap";
import road1 from '../../Assets/road1.png';
import road2 from '../../Assets/road2.png';
import road3 from '../../Assets/road3.png';
import road4 from '../../Assets/road4.png';
function Roadmap() {
    return (
      <section className='main'>
        <div className="roadmap-sec">
          <Container>
              <Row className="roadrow-1">
                  <Col md={3}>
                      <div className="roadmap-img-1">
                         <img src={road1} alt='' />
                      </div>
                  </Col>
              </Row>
              <Row>
              <Col md={3}>
              </Col>
                  <Col md={3}>
                      <div className="roadmap-img-2">
                         <img src={road2} alt='' />
                      </div>
                  </Col>
              </Row>
              <Row>
              <Col md={3}>
              </Col>
              <Col md={3}>
              </Col>
                  <Col md={3}>
                      <div className="roadmap-img-3">
                         <img src={road3} alt='' />
                      </div>
                  </Col>
              </Row>
              <Row className="roadrow-2">
              <Col md={3}>
              </Col>
              <Col md={3}>
              </Col>
              <Col md={3}>
              </Col>
                  <Col md={3}>
                      <div className="roadmap-img-4">
                         <img src={road4} alt='' />
                      </div>
                  </Col>
              </Row>
         </Container>
        </div>
      </section >
    );
  }
  
  export default Roadmap;
  