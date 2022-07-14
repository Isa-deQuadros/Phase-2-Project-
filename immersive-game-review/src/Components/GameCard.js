/// USe Modal for forms 

import React, {useState} from "react"
import styled from "styled-components";
import NewReviewForm from "./NewReviewForm";


const Container = styled.div`
    
    background-color:#27365a ;
    // DONE
    margin: 1rem;
    .card
    @media (min-width: 768px) {
        .cards {
    display: flex;
    flex-wrap: wrap; 
    }
   
    }

    p{
        align-self:center;
        margin-right: 20px
    }

    button{
        background-color:#6d936c; 
        // DONE ✅
        border-radius: 7px;

    }
`

function GameCard({gameCardDataFromContainer, renderGame, descriptionToggle, descriptionState, newReviewFormFunction}){
   const [musicState, setMusicState] = useState(true)
   const [audio, setAudio] = useState(new Audio(gameCardDataFromContainer.score))
   const [reviewForm, setReviewForm] = useState(false)

  
    const stop = () => {
        audio.pause(); 
    }

    const start = () => {
        audio.play(); 
    }

    function playAndPauseMusic(){
        setMusicState(!musicState)
        return musicState ? start() : stop()
    }

    
    function displayReviewForm(){
        setReviewForm(!reviewForm)
    }


    return(
        <Container>
            <div 
            className="card">
                <img onClick={()=>renderGame(gameCardDataFromContainer.name, gameCardDataFromContainer.reviews, gameCardDataFromContainer.trailer, gameCardDataFromContainer.description)}
                className="card_image"
                src={gameCardDataFromContainer.imageURL}  alt="game_image"/>
                <h3> {gameCardDataFromContainer.name} </h3>
                <p> Rating: {gameCardDataFromContainer.rating} </p>
                <p classList="description"> {descriptionToggle  && gameCardDataFromContainer.description === descriptionState ? gameCardDataFromContainer.description : null }</p>
                <button onClick={playAndPauseMusic}>  ▶️  ⏸ </button>
                <button onClick={displayReviewForm}> 🎮Add Review🎮</button>
                <div className="review-form">
                    { reviewForm ? <NewReviewForm newReviewFormFunction={newReviewFormFunction}/> : null}
                </div>
                

            </div>
        </Container>
    )
}
export default GameCard