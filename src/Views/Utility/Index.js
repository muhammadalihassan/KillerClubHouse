import { Col, Container, Row } from "react-bootstrap";

function Utility() {
    return (
      <section className='main'>
          <Container>
        <div className="utility-sec">
            
                <div className="utility-head">
                    <h2>Utility & Minting Incentives</h2>
                </div>
                <div className="staking-main">
                    <h4>FUNGUY STAKING</h4>
                    <p>With Phase 1 of our Roadmap well underway, we are happy to officially 
                        announce that FunGuy holders will be able to stake their FunGuy NFTs 
                        starting in Q2 2022.  FunGuy holders will receive $FUNGI tokens in return 
                        for staking their NFTs.  This will be done by connecting their wallets to our 
                        official website (funguyscnft.com). Please check out fun-paper for full details of staking rewards, utility and more! </p>
                </div>
           
        </div>
        <div className="staking-notes-sec">
            <Row>
                <Col md={3}>
                    <div className="staking-notes">
                        <h6>MINT a 1 of 1</h6>
                        <p>Each of our 7 little FunGals in seires 2 has a unique 1 of 1 super shroom to look out for. If you are lucky enough to mint one you'll win 100 ADA!</p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="staking-notes">
                        <h6>$ADA RAFFLE </h6>
                        <p>At 25%, 50%, 75% and 100% of minting for Series 2, we will be holding raffles of 100ADA at each benchmark for FunGal holders only! </p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="staking-notes">
                        <h6>SERIES 1&2 HOLDERS</h6>
                        <p>NFT holders of either Series 1 or Series 2 (FunGuys and FunGals) will have the chance to mint a 3D shroom ready for the metaverse! Q3 for 3D Shrooms!</p>
                    </div>
                </Col>
            </Row>
        </div>
        </Container>
      </section >
    );
  }
  
  export default Utility;
  