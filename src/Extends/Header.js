import React,{useState, useEffect} from 'react';


import { Navbar, Nav, Container,Button} from 'react-bootstrap';

import {Link} from 'react-router-dom'
// SITE LOGO
import sitelogo from '../Assets/logo.png';
import killer_video from '../Assets/killer_video.mp4';
import $ from 'jquery'
function Header() {

$(".click-span").click(function(){
  var a = $(this).closest(".inner-road").find(".road-card");
  var c = $(this).closest(".inner-road").find(".bat");
  var vid = document.getElementById("myAudio");
  if($(this).hasClass("active")){
      $(this).removeClass("active");
      a.hide();
      c.removeClass("up");
      vid.pause();
    c.fadeIn();
    console.log("hello 2");
    return false;
  } else{
    console.log("bye 1");
      $(this).addClass("active");
      a.show();
      c.addClass("up");
      vid.play();
      setTimeout(function() { 
        c.fadeOut(); 
    }, 6000);
  }
})
  $("body").ready(function(){
    var b = $(".road-card").hide();
    

  })
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
      
      <>
        <div className={"video-player"+(hideVideo==1?' video-hider':'')}>
      <video onEnded={() => setHideVideo(1)} width="100%" id='myVideo'>
        <source src={killer_video} type="video/mp4" />
        <source src={killer_video} type="video/ogg" />
      </video>
      <div className='video-play' id='play-btn'>
      <img src={sitelogo} alt="" />
        <Button onClick={playVid}>Enter</Button>
        </div>
    </div>
      <Container>
      <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="/killer-club-house"><img src={sitelogo} alt='logo'/></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/MINT"}>BUY/MINT</Nav.Link>            
          </Nav>
          
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
    </Container>
    </>
    );
  }

  
  export default Header;
  