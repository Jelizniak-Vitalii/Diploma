import React,{useState} from 'react';
import './scores.css';


const Scores = ({counter,endGame})=>{
    const [count, setCounter] = useState(0)

    const timeCounter = setTimeout(()=>{
        setCounter(count + 1)
    },1000)

    if(endGame){
        clearInterval(timeCounter)
    }

    

    return(
        <div className="info">
            <span className="info__time">{`Время: ${count}`}</span>
            <span className="info__tries">{`Попытки:`} {counter}</span>
        </div>
    )
}

export default Scores;