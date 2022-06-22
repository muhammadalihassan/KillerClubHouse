import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
function Staking() {
    return (
      <section className='main'>
        <div className="minthere-sec">
          <Container>
            <div className="staking-main staking-heading">
            <h4>Stake your funguy to collect 500 $FUNGI every week!</h4>
            <div className="staking-btns">
              <ul>
                <li> <Link as={Link} to="/">Claim Reward</Link></li>
                <li> <Link as={Link} to="/">Connect Wallet</Link></li>
              </ul>
            </div>
            </div>
           
          </Container>
        </div>
       
      </section >
    );
  }
  
  export default Staking;
  