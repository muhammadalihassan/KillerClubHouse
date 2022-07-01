import React, {useState} from 'react';
import story from './Assets/story.jpg';
import t1 from './Assets/t1.jpg';
import t2 from './Assets/t2.jpg';
import t3 from './Assets/t3.jpg';
import t4 from './Assets/t4.jpg';
import t5 from './Assets/t5.jpg';
import t6 from './Assets/t6.jpg';
import roadmap_img from './Assets/roadmap-img1.png' 
import bats_img from './Assets/Bats-img.gif'  
import bat_voice from './Assets/bat-voice.mp3'  
import tomb1 from './Assets/tomb1.png';
import tomb2 from './Assets/tomb2.png';
import tomb3 from './Assets/tomb3.png';
import tomb4 from './Assets/tomb4.png';
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


  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 200) : text}
        <a href='javascript:void(0)' onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </a>
      </p>
    );
  };
    
  const Content = () => {
    return (
      
          <ReadMore>
          Back in the medieval era, somewhere between 1253-1286 there lived three crones,
           each more powerful than the other. The crones who practiced witchcraft and blood
            magic had to work together to thrive in the world they lived in.
            The crones initially were humane who wanted to acquire immortality, to never get old, due to which they tried several ways but none of them worked. The crones had the respective names of Circe, Blair, and Glinda. One day they find themselves in an ancient cave which had inscriptions of evil spells and scriptures of blood magic. The scriptures included multiple spells to cast unnatural scenarios in reality. 
            These rituals included in resurrecting the dead by dark magic, which involved in utilizing an enchanted and sacred place and using its energy. The second ritual involved in being young forever which included blood magic, where blood of humans was consumed and the insides of the victims were devoured. The third ritual included in using an object as a vessel to travel around.
            The crones were overjoyed with the scriptures they had found, however, they wished for immortality and eternal youth, so they opted for that. The ritual involved a saga of spells, a virgin girl whose blood was required to complete the ritual and a uterus which had been developing a baby. 
            The crones stepped out to find all the ingredients to perform the ritual, however, they were only able to gather one virgin and one uterus, so the ritual could only be done for one of the crones, giving them eternal youth. The crones fought each other and it ended up in the most powerful crone to kill the other two, who were Blair and Glinda, meanwhile Circe, the most powerful crone survived and completed the ritual, giving her eternal youth. 
            Circe lived through centuries, travelling all around the world, however, after spending six centuries where her age was capped unnaturally at 21, she noticed herself getting old, wrinkles and loose skin. She was baffled and angry, so she took out the evil scriptures and found a cure for the condition, where she had to perform the third ritual to use an object which turned out to be a bear as a vessel until she finds herself a virgin girl and a pregnant woman who were related. 
          </ReadMore>
        
    );
  };

  const ReadMore2 = ({ children }) => {
    const text = children;
    const [isReadMore2, setIsReadMore2] = useState(true);
    const toggleReadMore2 = () => {
      setIsReadMore2(!isReadMore2);
    };
    return (
      <p className="text">
        {isReadMore2 ? text.slice(0, 300) : text}
        <a href='javascript:void(0)' onClick={toggleReadMore2} className="read-or-hide">
          {isReadMore2 ? "...read more" : " show less"}
        </a>
      </p>
    );
  };
    
  const Content2 = () => {
    return (
      
          <ReadMore2>
         By day, the Connors toured the land the village
          folk seemed to fear. Yes, it was indeed rather barren,
           but the surrounding countryside clearly flourished, 
           with no evidence of a spreading plant disease or unchecked
            insect infestation. Not ones to let superstition get the
             best of them, and capitalizing on the desperation of 
             the locals, the Connors purchased several farms adjacent
              to the “blasted heath,” and combined them into an impressive
               estate.
               As they had hoped, life proceeded rather peacefully for 
               the Connors. Mr. Connor took to raising livestock and 
               continued to apply the butchering trade as the need in 
               the neighborhood arose. Mrs. Connor was largely occupied 
               with tending to the needs of the family in the country manor,
                as well as its surrounding gardens. Their son was a vibrant 
                dreamer and gravitated to painting them from time-to-time. 
                Their daughter was an avid reader, and took to crafting her 
                own fairy tales filled with ancient magic and fantastical 
                creatures. As hoped, the children thrived in rural life, 
                especially with their newfound friendships with kids from 
                nearby farms.   
                Amid the summer of 1895, something unique came to that quiet,
                 secluded slice of Americana. The Connors had heard of traveling
                  circuses and carnivals of course, but nothing of this sort ever 
                  touring this far out from civilization. The carnival pitched
                   its giant tents right in the middle of the “blasted heath,” 
                   still as desolate as when the Connors had first arrived. Despite
                    the lingering memories of the land now hosting the event,
                     the draw of the carnival lights and sounds of the attractions
                      were too much for the locals to resist. Curiously, it was as 
                      if the population of this rural zone had boomed overnight. 
                      There were far too many attendees now flocking to this carnival
                       from every direction. Clearly more than can account for the 
                       small number of families who occupy this remote region. Wherever
                        all these people came from, you couldn’t deny how friendly 
                        they seemed, always inviting and beckoning with big smiles. 
                        The event was strangely free of charge. It was said to be a 
                        celebration of some kind, but no one could pin down the details.
                         There was candy and popcorn and games and wonders alike. It truly
                          was a sight to behold! The Connors, like all their farming 
                          friends around them, joined in the party that night.
                          Never had they seen such wonder! The trinkets and magic! The
                           tastes and smells! The many creatures and performers! 
                           People of all shapes and sizes, colors and creeds, were
                            represented there. Everyone was really into dressing the
                             part. The carnival was like a melting pot of every festival
                             , from the height of every empire, selecting only the best 
                             every corner of the globe had to offer, and bottling it all 
                             up into one place. What a blessing! What a fine memory for 
                             our children to cherish! The Connors couldn’t help but think. 
                             As the Connors were about to return home, along with the rest 
                             of their pleasantly exhausted neighbors, some of the event masters 
                             handed out souvenirs. They bid everyone a fond farewell and prioritized
                              the young children with their generous gifts. To the Connors’ daughter, 
                              they presented a stuffed teddy bear. One that would usually be quite difficult 
                              to win. The clown who delivered it, carried a large toothy grin that was quite
                               locked in place, his face smeared by a long night of makeup and sweat. Slightly
                                disturbed, but not wanting to appear rude, the Connors graciously accepted 
                                the token and quickly passed by. With the gift received, the daughter gave it 
                                a choking hug and promised then and there to love “Teddy,” forever. When the
                                 Connors finally arrived home, the happiness felt there could heat the whole of it.
                                  They drifted to sleep soundly that night, thinking that life couldn’t possibly 
                                  be better than this… 

                                  The Connors, I’m afraid, did not wake up, at least not in the way we typically understand. Their fate was to be an eternal nightmare from which there can be no peace.
          </ReadMore2>
        
    );
  };


  return (
    
    <section className='main'>
      <div className='index-main'>
        <Container>
          <div className='banner-main'>
            <h6>welcome to killer </h6>
            <h1 data-aos="fade-down">club<span>house</span></h1>
            <Content />
            <Link as={Link} to="/" className='button-r'>explore the club house</Link>
          </div>
          {/* <div className='tomb-sec'>
            <Row>
              <Col md={2}>
                <div className='tombs' data-aos="fade-up-right">
                  <img src={tomb1} />
                  <div className='tomb-txt-l'><Link to="/">Lorem</Link></div>
                </div>
              </Col>
              <Col md={2}>
                <div className='tombs' data-aos="fade-up-right">
                  <img src={tomb3} />
                  <div className='tomb-txt-s'><Link to="/">Lorem</Link></div>
                </div>
              </Col>
              <Col md={4}></Col>
              <Col md={2}>
                <div className='tombs' data-aos="fade-up-left">
                  <img src={tomb3} />
                  <div className='tomb-txt-s'><Link to="/">Lorem</Link></div>
                </div>
              </Col>
              <Col md={2}>
                <div className='tombs' data-aos="fade-up-left">
                  <img src={tomb4} />
                  <div className='tomb-txt-l'><Link to="/">Lorem</Link></div>
                </div>
              </Col>
            </Row>
          </div> */}
          <div className='red-boxes'>
            <div className='about-txt'>
              <h2 className='big-txt' >about us</h2>
              <div className='abt-headings'>
              <h3 className='small-txt'>killer club house about</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
              </div>
              
            </div>
          </div>
          <div className='red-boxes' id="story">
            <div className='story-txt'>
            <h2 className='big-txt' >story</h2>
              <Row>
                <Col md={12} lg={6} xl={6}>
                <img src={story} />
                </Col>
                <Col md={12} lg={6} xl={6}>
                <h3 className='small-txt'>your heading here</h3>
              <p>The Connors… Now there is a classically sobering tale.
                 Theirs was a family of relatively humble stock. Mr. Connor
                  was a skilled butcher by trade, while his wife was a 
                  homemaker as was common for married women of the time.
                   Wishing to raise their two young children in a more 
                   traditional manner, and after coming into a small inheritance,
                    the family left the city and headed into the countryside. </p>
                    <p>The year was 1892. As the Connor family was searching for a plot 
                      of land to settle, all the locals they talked to seemed anxious to
                       leave. They frequently would bargain downward to try and secure a
                        quick deal, as only the Connors had come looking to buy in God knows
                         how long. In search of their motivations, Mr. Connor gathered a few
                          rumors referencing a “blasted heath” nearby, and a cloud of madness 
                          that surrounded the now decade deceased owners. </p>
                </Col>
              </Row>
              <div className='remaining-story-cntnt'>
              <Content2 />
              </div>
            </div>
          </div>
          <div className='red-boxes' id="road">
            <div className='roadmap-txt'>
              <h2 className='big-txt' >roadmap</h2>
              <div className='abt-headings'>
              <h3 className='small-txt'>the killer journey</h3>
              </div>
            </div>
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
   
          </div>
          <div className='red-boxes' id="team">
            <div className='team-txt'>
              <h2 className='big-txt' >team</h2>
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
          <div className='red-boxes' id="faq">
            <div className='faq-txt faq-sec'>
              <h2 className='big-txt' >faq's</h2>
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
