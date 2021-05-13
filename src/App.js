import React,{useEffect,useState} from 'react';
import './App.css';
import './components/reset.css';
import Cards from './components/cards.jsx';
import Title from './components/title.jsx';
import Scores from './components/scores.jsx';
import data from './posts.json';
import Menu from './components/menu.jsx';



function App() {
  const [maxCards, setMaxCards] = useState(10);
  const [cardFrontSide, setCardFrontSide] = useState('./img/card-logo/panda-logo.jpg');
  const [counter, setCounter] = useState(0);
  const [showCards, setShowCards] = useState(showCard());
  const [cardsOpen, setCardsOpen] = useState([]);
  const [countCardsFind,setCountCardsFind] = useState(2)
  const [startGame , setStartGame] = useState(false);
  const [opacity, setOpacity] = useState(false)
  const [showEndGame,setShowEndGame] = useState(false)
  


  
  function showCard (){
    return data.slice(0, maxCards).sort(()=> Math.floor(Math.random() - 0.5))
  } 

  function start (){
    setStartGame(true)   
  }


  function flipCard (id){
    const newList = showCards.map((el => {
      if(el.id === id && !el.value){
        const newCard = {...el, value: true, opacity: 1}
        setCardsOpen([...cardsOpen, newCard])
        setCounter(counter + 1)
        return newCard
      }else{
        return el
      } 
    }))
    setShowCards(newList)
  }

  function compareCards (){
    if(cardsOpen[0].name === cardsOpen[1].name){
       cardsOpen.forEach((el =>{
         if(el.value){
           el.opacity = 0
         }
         setCardsOpen([])
       }))
      setCountCardsFind(countCardsFind + 2)
      endGame()
      return setOpacity(true)
    }else{
      cardsOpen.map((el =>{
      return  el.value = false;
      }))
      setCardsOpen([])
    }
  }

  useEffect(() => {
    if(cardsOpen.length > 1){
      setTimeout(compareCards,700)
    }
  })

function endGame() {
  if(countCardsFind === maxCards){
    setShowEndGame(true)
  }
}
function changeCards() {
    setShowCards(showCard)
}

  
    
  return (
       <div>
        <Title/>
        <Menu setMaxCards={setMaxCards} 
              setCardFrontSide={setCardFrontSide}
              start={start}
              changeCards={changeCards}
              />
        {startGame ? <Scores counter={counter} endGame={showEndGame}/> : null}

          {startGame ? <div className="container">
            {console.log(showCards)}
            <div className="end-game" style={{display: showEndGame ? 'flex' : 'none'}}>Игра окончена</div>
          
            {showCards.map((el => <Cards  id={el.id} 
                                  srcImg={el.src} 
                                  src={cardFrontSide} 
                                  flipCard={flipCard}
                                  rotated={el.value}
                                  opacity={el.opacity}
                                  
                          />))}
          </div> : null}
      </div> 
  );
}

export default App;
