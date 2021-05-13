import React from 'react';
import './cards.css';

const Cards = ({id,src,srcImg,flipCard,rotated,opacity}) => {
   
    
       
    return(
            <div id={id} className={rotated ? "rotated" : 'block'} style={{opacity: opacity}} onClick={()=> flipCard(id)} >
                <div className="front side" >
                    <img src={src} alt=''></img>
                </div>
                <div className="back side" >
                    <img src={srcImg} alt=''></img>
                </div>
            </div>
    )
}

export default Cards;
