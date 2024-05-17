import React from 'react';
import videoBg from '../assets/203260-920602949_medium.mp4'
import myEye from '../image 6.png'



const Main = ({onOpen}) => {
  
  return (
    <div className='main'>
        <div className="overlay"></div>
     <video src={videoBg} autoPlay loop muted/>
     <div className='content'>
     <h1 className='Saira-condensed-semibold'>Sick of dull <span className='secondary-text'>Videos?</span><img src={myEye} alt='watch' className='My-eye' onClick={onOpen} />
 Elevate Your Content now</h1> <button className='Button'>Get in touch</button>
     </div>
    </div>
  )
}

export default Main
