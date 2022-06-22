import { Container } from "react-bootstrap";

function Minthere() {
    return (
      <section className='main'>
        <div className="minthere-sec">
          <Container>
            <h4>MINT HERE </h4>
            <p>*Pay-in-addresses will <span>ONLY</span> be posted here on our website on this page! <span>ANY OTHER</span> addresses posted elsewhere will be a scam–please be careful! </p>
          </Container>
        </div>
        <div className="instruction-sec">
          <Container>
          <h4>INSTRUCTIONS: </h4>
          <p>Do not send ADA from an exchange.  Please use a Cardano supported wallet, such as Nami, Daedalus, Yoroi, or ccvault.</p>
          <p><span>There will be a 5 NFT limit per transaction, however there is no limit to the number of transactions. 
            Do not attempt to purchase more than 5 at a time, otherwise you will have to wait to be refunded.</span></p>
            <ul>
              <li>Price List:</li>
              <li>1 NFT = 35 ADA</li>
              <li>2 NFT = 70 ADA</li>
              <li>3 NFT = 105 ADA</li>
              <li>4 NFT = 140 ADA</li>
              <li>5 NFT = 175 ADA</li>
            </ul>
            <h6>Please send in the exact amount of ADA to the following address:</h6>
            <span>addr1v84fv0dvhfeaumzsz9zsw0hayquj9ju0wyl8pqcxzy2vmdsvvv90q</span>
          </Container>
        </div>
      </section >
    );
  }
  
  export default Minthere;
  