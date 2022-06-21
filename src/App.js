import { Container, Row, Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import story_img from './Assets/story-img1.png' 
import story_img2 from './Assets/story-img2.png' 
import ques_mark from './Assets/ques_mark.png' 
import house_img1 from './Assets/house-img1.png' 
import house_img2 from './Assets/house-img2.png' 
import house_img3 from './Assets/house-img2.png' 
import roadmap_img from './Assets/roadmap-img1.png' 
import bats_img from './Assets/Bats-img.gif'  
import bat_voice from './Assets/bat-voice.mp3'  
import $ from 'jquery' 

// SITE LOGO
import sitelogo from './Assets/logo.png';
import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [hideVideo, setHideVideo] = useState(0);
  function playVid() {
    var vid = document.getElementById("myVideo");
      vid.play();
      var element = document.getElementById("play-btn");
     element.classList.add("mystyle");
  }

  
  return (
    <section className='main'>
   <Container>
   <Row>
     <Col md={5}></Col>
     <Col md={7}>
     <div className="banner-heading">
     <h4>Killer Club </h4>
     <h3>House</h3>
   <div className="banner-btn">
   <Link to="/mint">explore the club house</Link>
   </div>  
     </div>
       
     </Col>
   </Row>
   </Container>
   {/* story section  */}
   <div className='story-sec'>
   <Container>
   <Row>
   <Col md={6}>
    <div className="story-img"  data-aos="fade-right" data-aos-delay="300" data-aos-duration='3000'>
      <img src={story_img} alt='img'/>
    </div>
   </Col>
   <Col md={6}>
   <div className="story-txt" data-aos="zoom-in" data-aos-delay="300" data-aos-duration='3000'>
     <div className="sword">
     <img src={story_img2} alt='img'/>
     </div>
    <div className="story-content" data-aos="fade-left" data-aos-delay="300" data-aos-duration='3000'>
      <h3>Killer Club House</h3>
      <p>Every summer as kids, we would travel to my aunt's farm on the creek, where we had very fond memories catching crawfish, fishing, swimming and bonding together over campfire weenies in the evening. Under the circumstances of my aunt's death, I was unable to absorb the typical nostalgic feeling you would get. </p>
      <p>The weather started to shift from a warm summer evening into a mix of heavy rain and thunder. The creepy hotel I had seen 30 miles back seemed like heaven to me at this point. However, I was running late and, determined to be at the funeral, refused to stop anymore. </p>
      <div className="banner-btn">
   <Link to="/story">read more</Link>
   </div>
    </div>
     </div>
   </Col>
   </Row>
   </Container>
   </div>
   {/* story section End */}
   {/* collection  */}
   <div className="collection" data-aos="zoom-in" data-aos-delay="300" data-aos-duration='3000'>
     <h2>collection</h2>
   </div>
   {/* collection End */}
   {/* killer club house  */}
   <Container>
   <div className="killer-house">
     <h2>killer club house</h2>
     <div className="killer-house-img">
     <Row>
       <Col md={4}>
          <div className="killer-img"><img src={ques_mark} alt='img' /></div>  
       </Col>
       <Col md={4}><div className="killer-img-main"><img src={ques_mark} alt='img' /></div>  </Col>
       <Col md={4}><div className="killer-img"><img src={ques_mark} alt='img' /></div>  </Col>
     </Row>
     </div>

   </div>
   </Container>

   {/* killer club house End */}
   {/* roadmap heading  */}
   <Container>
   <div className="roadmap-head" data-aos="zoom-in" data-aos-delay="300" data-aos-duration='3000'>
      <h2>roadmap</h2>
    </div>
   </Container>

   {/* roadmap heading End */}

    {/* main roadmap  */}
    <Container>
    <div className="road">
    <div className="road-img">
   <img src={roadmap_img} alt="img" />
   <div className="roadmap-card">
    <div className='inner-road'>
    <a href='javascript:void(0)' className='click-span'>1</a>
    <div className='road-card'>
    <div className="card-head">
    <h3>Phase 1</h3>
       <h5>Project Planning And Research</h5>
       <h5>Rendering Getting Final Stages Ready For Launch</h5>
       </div>
    </div>
    <div className="bat"> <img src={bats_img} alt="img" />
   <div className={"video-player"+' '+"audio-player"+(hideVideo==1?' video-hider':'')}>
      <audio onEnded={() => setHideVideo(1)} width="100%" id='myAudio'>
        <source src={bat_voice} type="video/mp3" />
        <source src={bat_voice} type="video/ogg" />
      </audio>
    </div>
     </div>
    </div>
   </div>
   <div className="roadmap-card left-cd">
    <div className='inner-road'>
    <a href='javascript:void(0)' className='click-span'>2</a>
    <div className='road-card'>
    <div className="card-head">
    <h3>Phase 2</h3>
    <h5>Start Game Production</h5>
       <h5>Website Released</h5>
       <h5>Build community</h5>
       <h5>Living Room Released 2222 Nfts</h5>
       <h5>1 Of 1 Super Legendary Gif Nft Giveaway</h5>
       <h5>Secure Metaverse Partnership</h5>
       <h5>Early Active Community Members Can Secure Perks And Guarantee A Clubhouse Nft</h5>
       <h5>Fun Competitions And Giveaways</h5>
       <h5>Ada Giveaways</h5>
       <h5>2nd Clubhouse Drop 2222 Nfts</h5>
       </div>
    </div>
    <div className="bat"> <img src={bats_img} alt="img" /></div>
    </div>
   </div>
   <div className="roadmap-card right-cd">
    <div className='inner-road'>
    <a href='javascript:void(0)' className='click-span'>3</a>
    <div className='road-card right-card'>
    <div className="card-head">
    <h3>Phase 3</h3>
    <h5>3rd Clubhouse Released 2222 Nfts</h5>
       <h5>Stake Pool With Metaverse And Gaming Projects Bring Utility To Holders And The Ecosystem</h5>
       <h5>“Token” Release For Game In Qtr 4</h5>
       <h5>Promos/Previews For The Game</h5>
       <h5>4th Clubhouse Release 2222 Nfts</h5>
       <h5>Preparation For Cnft Con</h5>
       </div>
    </div>
    <div className="bat left-bat"> <img src={bats_img} alt="img" /></div>
    </div>
   </div>
   <div className="roadmap-card end-cd">
    <div className='inner-road'>
    <a href='javascript:void(0)' className='click-span'>4</a>
    <div className='road-card end-card'>
    <div className="card-head">
    <h3>Phase 4</h3>
    <h5>Final Room Drop Of Series 2222 Nfts Game Launch</h5>
    </div>
    </div>
    <div className="bat end-bat"> <img src={bats_img} alt="img" /></div>
    </div>
   </div>
   </div>
   </div>
   
    </Container>
   
    {/* main roadmap End */}











    </section>
  );
}

export default App;
