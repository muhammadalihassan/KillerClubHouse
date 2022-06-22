import guy1 from './Assets/guy1.png';
import guy2 from './Assets/guy2.png';
import guy3 from './Assets/guy3.png';
import guy4 from './Assets/guy4.png';
import guy5 from './Assets/guy5.png';
import guy6 from './Assets/guy6.png';
import guy7 from './Assets/guy7.png';
import meet1 from './Assets/bread.png';
import meet2 from './Assets/orlado.png';
import meet3 from './Assets/sammy.png';
import meet4 from './Assets/eitaro.png';
import meet5 from './Assets/luigi.png';
import meet6 from './Assets/morel.png';
import meet7 from './Assets/paul.png';
// BUBBLE
import bubble from './Assets/bubble.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
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
      <Container>
      <div className='topbanner'>
          <ul>
            <li  data-aos='fade-down'>
               <img src={guy1} alt='' className='bimg-1' />
            </li >
            <li  data-aos="fade-down">
            <img src={guy2} alt='' className='bimg-3'/>
            </li>
            <li  data-aos="fade-down">
            <img src={guy3} alt='' className='bimg-5' />
            </li>
            <li  data-aos="fade-down">
            <img src={guy4} alt='' className='bimg-7' />
            </li>
          </ul>
          <ul>
            <li data-aos='fade-up'>
            <img src={guy5} alt='' className='bimg-2'/>
            </li>
            <li data-aos='fade-up'>
            <img src={guy6} alt='' className='bimg-4' />
            </li>
            <li data-aos='fade-up'>
            <img src={guy7} alt='' className='bimg-6' />
            </li>
          </ul>
        
      </div>
      <div className='live-minting'>
        <h3>
        Series 2 Coming Soon
        </h3>
        {/* <h4>
          mint count: 765/1050
        </h4>
        <Link to="/minthere" className='all-btns mint-btn'>Mint here</Link> */}
        <p>Holders of a FunGuy from Series 1 or a FunGirl from Series 2 (coming in Q2)
           will be eligbile to stake their NFTs starting in Q2, 2022! Check out our utility plans 
           <Link as={Link} to="/utility" >Here</Link>
           </p>
      </div>
      <div className='meet-guys'>
        <div className='meetguys-head'>
        <h5>Meet the FunGuys!</h5>
        <p>The year is 7070 and mushrooms have taken 
          over the world and are now the dominant species
           (yes you read that right!). They have evolved and 
           can now walk, talk and live in an all round fun society. 
           These adorable little beings somehow managed to overthrow
            humans to become the super species of the planet and are now 
            having a really great time.  A diverse group of friends which 
            call themselves the fun-guys (very much pun intended!) all live 
            in the same city, New Mush City from the country of Fungland! The 
            group of 7 friends are each different varieties of common mushrooms 
            which are found throughout the land. Why don't you get to know the
             mushrooms below.......</p>
        </div>
             <Row>
               <Col sm={4}>
               <img src={meet1} alt='' className='flt-rgt'/>
               </Col>
               <Col sm={4}>
                 <h5>Brad the Button</h5>
                 <p>Brad is a button mushroom, the most common mushroom throughout the land. He is highly sociable and loves hanging out with his mates. He works as a farmer, making sure that all his fellow mushrooms have enough food so they can grow big and strong.</p>
               </Col>
               <Col sm={4}>
                 
               </Col>
             </Row>
             <Row>
               <Col sm={4}>
               
               </Col>
               <Col sm={4}>
                 <h5>Orlando the Oyster</h5>
                 <p>Orlando is an Oyster mushroom and like Brad is also a fairly common mushroom to be found. He comes from a family of 12 of which he is the oldest. Orlando loves playing sports, his favorite is stemball which is much like soccer we play today. He works as Chef and his specialty is spaghetti sawdust bolognese.</p>
               </Col>
               <Col sm={4}>
               <img src={meet2} alt='' className='flt-lft'/>
               </Col>
             </Row>
             <Row>
               <Col sm={4}>
               <img src={meet3} alt='' className='flt-rgt'/>
               </Col>
               <Col sm={4}>
                 <h5>Sammy the Shiitake</h5>
                 <p>Sammy is a Shiitake mushroom with a big cap. Shiitake mushrooms are found all over the world but are not as common as Oyster or Button mushrooms. Sammy is a doctor who works for the Fungland Hospital. In his spare time he enjoys spending his money on lavish holidays and driving round his sports cars.</p>
               </Col>
               <Col sm={4}>
                 
               </Col>
             </Row>
             <Row>
               <Col sm={4}>
               
               </Col>
               <Col sm={4}>
                 <h5>Eitaro the Enoki</h5>
                 <p>Eitaro is an Enoki mushroom born in Japan.  He moved to Fungland when he was 18 years old and has felt right at home ever since. Enoki’s are much harder to come by than Button, Oyster, Shiitake or Lions Mane mushrooms but are usually great fun to be around. Teaching languages is Eitaro’s profession, and he also loves to play sports when he is not working. He plays on the same stemball team as Orlando.  He is married to a beautiful FunGirl who you’ll meet in the next series!</p>
               </Col>
               <Col sm={4}>
               <img src={meet4} alt='' className='flt-lft'/>
               </Col>
             </Row>
             <Row>
               <Col sm={4}>
               <img src={meet5} alt='' className='flt-rgt'/>
               </Col>
               <Col sm={4}>
                 <h5>Luigi the Lion's Mane</h5>
                 <p>Luigi is a Lion's Mane mushroom and is the cool one of the group. He has the distinctive long hair and loves skateboarding at the local park. His favorite trick is the 360 heelflip off a tree stump. He is also a hit with the fun-girls and you will often find him out on various dates. He works two different jobs as a lifeguard by day and waiter by night.</p>
               </Col>
               <Col sm={4}>
                 
               </Col>
             </Row>
             <Row>
               <Col sm={4}>
               
               </Col>
               <Col sm={4}>
                 <h5>Mo the Morel</h5>
                 <p>Mo is a Morel mushroom and is one of the least common mushrooms you will see in Fungland. He is shy and reserved, but when you get to know him, he is quite the comedian. He works for the local phone service provider called Mycelial Networks Ltd. In his spare time, he loves going to the cinema and watching the latest movie releases. As you can see here, he's not a fan of avocados.....</p>
               </Col>
               <Col sm={4}>
               <img src={meet6} alt='' className='flt-lft'/>
               </Col>
             </Row>
             <Row>
               <Col sm={4}>
               <img src={meet7} alt='' className='flt-rgt'/>
               </Col>
               <Col sm={4}>
                 <h5>Paul the Penis Envy</h5>
                 <p>Paul is a type of psychedelic mushroom called Penis Envy (Yes this is a real mushroom…!). As you may expect, he’s a very chilled and relaxed guy, not much phases him. He is often high on life and thinks there should be more loving in the world. He is an entrepreneur and is currently trying to launch his start-up business, ‘Mushrooms on Marijuana’ up and running. He is quite the character, but a really rare find!</p>
               </Col>
               <Col sm={4}>
                 
               </Col>
             </Row>
      </div>
      </Container>
    </section >
  );
}

export default App;
