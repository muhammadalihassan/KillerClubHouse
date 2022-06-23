import story from './Assets/story.jpg';
import t1 from './Assets/t1.jpg';
import t2 from './Assets/t2.jpg';
import t3 from './Assets/t3.jpg';
import t4 from './Assets/t4.jpg';
import t5 from './Assets/t5.jpg';
import t6 from './Assets/t6.jpg';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 1000,
});

function App() {
  return (
    
    <section className='main'>
      <div className='index-main'>
        <Container>
          <div className='banner-main'>
            <h6>welcome to killer club</h6>
            <h1>house</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since...</p>
            <Link as={Link} to="/" className='button-r'>explore the club house</Link>
          </div>
          <div className='red-boxes'>
            <div className='about-txt'>
              <h2 className='big-txt'>about us</h2>
              <div className='abt-headings'>
              <h3 className='small-txt'>killer club house about</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
              </div>
              
            </div>
          </div>
          <div className='red-boxes'>
            <div className='story-txt'>
            <h2 className='big-txt'>story</h2>
              <Row>
                <Col md={12} lg={6} xl={6}>
                <img src={story} />
                </Col>
                <Col md={12} lg={6} xl={6}>
                <h3 className='small-txt'>your heading here</h3>
              <p>Lorem Ipsum is simply dummy text of the printing
                 and typesetting industry. Lorem Ipsum has been the 
                 industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled 
                  it to make a type specimen book. It has survived not only five
                   centuries, but also the leap into electronic typesetting, 
                   remaining essentially unchanged. It was popularised in the 
                   1960s with the release of Letraset sheets.</p>
                </Col>
              </Row>
            </div>
          </div>
          <div className='red-boxes'>
            <div className='roadmap-txt'>
              <h2 className='big-txt'>roadmap</h2>
              <div className='abt-headings'>
              <h3 className='small-txt'>the killer journey</h3>
              </div>
            </div>
          </div>
          <div className='red-boxes'>
            <div className='team-txt'>
              <h2 className='big-txt'>team</h2>
              <div className='abt-headings'>
              <h3 className='small-txt'>killer club house team</h3>
              </div>
              <Row>
                <Col md={6} lg={4} xl={4}>
                  <div className='team-img'>
                    <img src={t1} />
                    <div className='img-txt'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4} xl={4}>
                  <div className='team-img'>
                    <img src={t2} />
                    <div className='img-txt'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4} xl={4}>
                  <div className='team-img'>
                    <img src={t3} />
                    <div className='img-txt'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4} xl={4}>
                  <div className='team-img'>
                    <img src={t4} />
                    <div className='img-txt'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4} xl={4}>
                  <div className='team-img'>
                    <img src={t5} />
                    <div className='img-txt'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4} xl={4}>
                  <div className='team-img'>
                    <img src={t6} />
                    <div className='img-txt'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className='red-boxes'>
            <div className='faq-txt faq-sec'>
              <h2 className='big-txt'>faq's</h2>
              <div className='abt-headings'>
              <h3 className='small-txt'>frequently asked questions</h3>
              </div>
              <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header><span>Q1</span><h6>It is a long established fact that a reader will be distracted ?</h6></Accordion.Header>
    <Accordion.Body>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wordswhich don't look even slightly believable..</p>
   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary..</p>
   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat..</p>
   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text..</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><span>Q2</span><h6>By the readable content of a page when looking at its layout ?
</h6></Accordion.Header>
    <Accordion.Body>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wordswhich don't look even slightly believable..</p>
   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary..</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header><span>Q3</span><h6>It is a long established fact that a reader will be distracted ?</h6></Accordion.Header>
    <Accordion.Body>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wordswhich don't look even slightly believable..</p>
   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary..</p>    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header><span>Q4</span><h6>By the readable content of a page when looking at its layout ?</h6></Accordion.Header>
    <Accordion.Body>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wordswhich don't look even slightly believable..</p>
   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary..</p>    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header><span>Q5</span><h6>It is a long established fact that a reader will be distracted ?</h6></Accordion.Header>
    <Accordion.Body>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wordswhich don't look even slightly believable..</p>
   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary..</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="6">
    <Accordion.Header><span>Q6</span><h6>By the readable content of a page when looking at its layout ?</h6></Accordion.Header>
    <Accordion.Body>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wordswhich don't look even slightly believable..</p>
   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary..</p>    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </div>
          </div>
        </Container>
      </div>
    </section >
  );
}

export default App;
