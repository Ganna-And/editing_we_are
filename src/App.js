import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import ModalFullScreen from './components/ModalFullScreen';


function App() {
  const [showFullScreenVideo, setShowFullScreenVideo] = useState(false);
  const handleImageClick=()=>{
    console.log('img clicked');
     setShowFullScreenVideo(true)
   }
 
   const handleCloseModal =function(){
     setShowFullScreenVideo(false)
   }

   console.log(showFullScreenVideo);
     return (
<>{
showFullScreenVideo ?(<ModalFullScreen onClose={handleCloseModal}/>):<Main onOpen ={handleImageClick}/>}
</>
    
  );
}

export default App;
