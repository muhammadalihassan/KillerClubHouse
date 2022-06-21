import { Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import left_icon from '../../Assets/left-icon.png'
import mc_symbol from '../../Assets/mc_symbol.svg'
import amex from '../../Assets/amex.png'
import Visa_Brandmark from '../../Assets/Visa_Brandmark_White_RGB_2021.png'

function Mint() {
  return (
    <div className="mint-sec">
      {/* <div id="login-reg">
        <div className="overlay pb-120">
          <Container>
            <div className="top-area">
              <Row className='d-flex align-items-center'>
                <Col md={5} className='col'>

                  <Link to={'/'} className="back-home"><img src={left_icon} alt='img' /> Back To Home</Link>
                </Col>
                <Col md={5} className='col'>

                  <a id="joerichards_connect_wallet" href="#" className="joerichards_show_on_desktop cmn-btn">Installing...</a>
                  <a id="joerichards_mobile_connect_wallet" href="#" className="joerichards_hide_on_desktop cmn-btn">Connect Wallet</a>
                </Col>
              </Row>
            </div>
            <Row className="pt-120 d-flex justify-content-center">
              <Col md={6}>
                <div className="login-reg-main text-center">
                  <h4>Mint your RMRs</h4>
                  <div className="form-area">
                    <div className='form-gp'>
                <Form.Label>Select amount</Form.Label>
                <Form.Label>max 33</Form.Label>    
                    </div>
                    <div className='form-txt'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" value={2}/>
                  </Form.Group>
                  <Form.Label>Price ------ 0.051 ETH</Form.Label>
                  <br/>
                <Form.Label><b>Total ------ 0.102 ETH</b></Form.Label> 
                <div className="form-group pt-4 cmn-btn-pd">
                    <button id="joerichards_mint_button" type="submit" className="cmn-btn">Mint 2 get 1 FREE</button>
                  </div> 
                    </div>
                    <div className="or">
                      <p>OR</p>
                    </div>
                    <div className="sign-in">
                      <p>Mint with Credit Card</p>
                    </div>
                    <div className="reg-with">
                      <div className="social-area d-flex justify-content-center">
                        <a className="master checkout-button" href="#"><img src={mc_symbol} alt='img' /></a>
                        <a className="visa checkout-button" href="#"><img src={Visa_Brandmark} alt='img' /></a>
                        <a className="amex checkout-button" href="#"><img src={amex} alt='img' /></a>
                      </div>
                    </div>
                    <div className="account">
                      <p id="txStatus">PS: Gas fee is cheaper if you mint many at once!</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div> */}

      <Container>
        <h1>Coming Soon !</h1>
        <Link to={'/'} className="back-home"><img src={left_icon} alt='img' /> Back To Home</Link>
      </Container>
    </div>
  );
}

export default Mint;
