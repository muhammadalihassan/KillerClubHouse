import { Col, Container, Row } from "react-bootstrap";
import full from '../../Assets/full.png';
function FAQ() {
    return (
      <section className='main'>
          <Container>
            <div className="faq-sec">
                <h3>FAQ's</h3>
                <ul>
                    <li>
                        <h6>What is the drop date?</h6>
                        <p>Series 1 minting is live! Go get yourself FunGuy <a href="/funguysnft/minthere">here!</a></p>
                    </li>
                    <li>
                        <h6>What is the policy ID?</h6>
                        <p>Policy ID: <span>09a05cce8bc7c8cb46a78c2b96bc2e10efdb214f17e2793c6b3bd5b0</span></p>
                    </li>
                    <li>
                        <h6>Are there any rarities?</h6>
                        <p>Yes! Check out our rarity table within our Discord, or alternatively we are listed on <a href="https://cnft.tools/" target="_blank">cnft.tools.</a> </p>
                    </li>
                    <li>
                        <h6>Do you have a Twitter?</h6>
                        <p>Yes - check it out here: <a href="https://twitter.com/funguyscnft" target="_blank">Twitter.com/FunGuysCNFT</a> </p>
                    </li>
                    <li>
                        <h6>How many NFT's will be released in series 1?</h6>
                        <p>Our first drop will consist of 1050 FunGuys!  What was originally supposed to be 2050, was cut in half to fit to our community size and increase demand. </p>
                    </li>
                    <li>
                        <h6>How much will it cost to mint a FunGuy?</h6>
                        <p>All FunGuy NFTs will cost 35ADA.</p>
                    </li>
                    <li>
                        <h6>Is this a verified project?</h6>
                        <p>We are verified on <a href="http://jpg.store/" target="_blank">JPG.store </a> and <a href="https://cnft.io/" target="_blank">CNFT.io</a>.
                         We should be verified on <a href="https://www.genesishouse.io/" target="_blank">genesishouse.io </a>soon and are looking into getting verified on
                        <a href="https://tokhun.io/" target="_blank">Tokhun.io. </a>
                        </p>
                    </li>
                </ul>
            </div>
        </Container>
      </section >
    );
  }
  
  export default FAQ;
  