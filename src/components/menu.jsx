import React from 'react';
import './menu.css';
import { DropdownButton,Dropdown } from 'react-bootstrap';



const Menu = ({setMaxCards,setCardFrontSide,start,changeCards}) => {
    const choicesComplexity = (event) => {
        setMaxCards(event.target.innerHTML)
        
        changeCards()
    }
    const choiceCard = (event) => {
        setCardFrontSide(event.target.getAttribute('src'))
    }
    return(
        <div className="menu">
            
            <button className="start dropdown-toggle" onClick={start}>Старт</button>
            
            <DropdownButton id="dropdown-basic-button" title="Выбрать Вид карточек" className="menu-select__card">
                <Dropdown.Item ><img onClick={choiceCard} src="/img/card-logo/panda-logo.jpg" className="menu-select__card_item" alt=""></img></Dropdown.Item>
                <Dropdown.Item ><img onClick={choiceCard} src="/img/card-logo/kung-fu-panda-logo.jpg" className="menu-select__card_item" alt=""></img></Dropdown.Item>
                <Dropdown.Item ><img onClick={choiceCard} src="/img/card-logo/panda-shadow-logo.jpg" className="menu-select__card_item" alt=""></img></Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="Выбрать сложность" className="menu-select__complicated">
                <Dropdown.Item onClick={choicesComplexity}>10</Dropdown.Item>
                <Dropdown.Item onClick={choicesComplexity}>15</Dropdown.Item>
                <Dropdown.Item onClick={choicesComplexity}>20</Dropdown.Item>
                <Dropdown.Item onClick={choicesComplexity}>24</Dropdown.Item>
            </DropdownButton>

            
            
        </div>
    )
}


export default Menu;