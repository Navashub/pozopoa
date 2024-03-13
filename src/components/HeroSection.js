// import React from 'react';
// import { Button } from './Button';
// import './HeroSection.css';
// import '../App.css';

// function HeroSection() {
//   return (
//     <div className='hero-container'>
//         <video src='/videos/video-2.mp4' autoPlay loop muted />
//         <h1>Welcome to Pozo Poa!</h1>
//         <p>Together, let's savor the essence of tradition, the bounty of nature and the joy of nourishing our communities--one grain at a time.</p>
//         <div className='hero-btns'>
//             <Button className='btns' buttonStyle='btn--outline'
//             buttonSize='btn--large'> GET STARTED</Button>
//             <Button className='btns' buttonStyle='btn--primary'
//             buttonSize='btn--large'> WATCH VIDEO <i className='far fa-play-circle' /></Button>
//         </div>
//     </div>
//   )
// }

// export default HeroSection


import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>WELCOME TO POZO POA!</h1>
      <p>Together, let's savor the essence of tradition, the bounty of nature and the joy of nourishing our communities--one grain at a time.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;