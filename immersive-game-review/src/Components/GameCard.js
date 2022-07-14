/// USe Modal for forms 

import React, {useState} from "react"
import styled from "styled-components";


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
        border-radius: 7px;

    }
`

function GameCard({gameCardDataFromContainer, renderGame}){
   const [musicState, setMusicState] = useState(true)
   const [audio, setAudio] = useState(new Audio(gameCardDataFromContainer.score))

  
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

    
    return(
        <Container>
            <div 
            className="card">
                <img onClick={()=>renderGame(gameCardDataFromContainer.name, gameCardDataFromContainer.reviews, gameCardDataFromContainer.trailer)}
                className="card_image"
                src={gameCardDataFromContainer.imageURL}></img>
                <h3> {gameCardDataFromContainer.name} </h3>
                <p> Rating: {gameCardDataFromContainer.rating} </p>
                <p classList="description"> {gameCardDataFromContainer.description}</p>
                <button onClick={playAndPauseMusic}>  ▶️  ⏸ </button>
                

            </div>
        </Container>
    )
}
export default GameCard