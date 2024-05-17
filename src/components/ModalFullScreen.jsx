import React from "react";
import videoSrc from '../assets/sky replacement-1.mp4'

const ModalFullScreen =({ onClose})=>{
 
    return(
        <div className="fullscreen_secondary">
            <video src={videoSrc} autoPlay controls className="fullscreen_secondary"/>
            <button onClick={onClose} className="btn__close">X</button>
        </div>
    )
}

export default ModalFullScreen;