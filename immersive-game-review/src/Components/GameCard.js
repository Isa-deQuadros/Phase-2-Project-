

import React, {useState} from "react"
import styled from "styled-components";


const Container = styled.div`
    
    background-color:#27365a ;
    // DONE
    margin: 1rem;
    .card{
    @media (min-width: 768px) {
        .cards {
    display: flex;
    flex-wrap: wrap; 
    }
    }}
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

function GameCard({gameCardDataFromContainer, renderGame, descriptionToggle, descriptionState}){
    const [musicState, setMusicState] = useState(true)
    const [audio, setAudio] = useState(new Audio(gameCardDataFromContainer.score))

//    const [ upvotes, setUpVotes]= useState()
    const [ upvotes, setUpVotes]= useState(gameCardDataFromContainer.likes)

    const [ downvotes, setDownVotes]= useState (0)


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

    function updateLikes(updatedLike){
        const updateLike= gameCardDataFromContainer.map((like)=>
        like.id === updatedLike.id? updatedLike : like);
        setUpVotes(updateLike)

    }
    
    function increaseLikes(){

        const config ={
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({likes: gameCardDataFromContainer.likes +1 })

        }
        fetch(`http://localhost:3002/gameCard/${gameCardDataFromContainer.id}`, config)
        .then(res=> res.json())
        .then(data => updateLikes(data))

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
                <button onClick={increaseLikes}> {upvotes} 🔥  </button>
                <button onClick={()=> setDownVotes( downvotes +1 )}> {downvotes}👎 </button>
                <p classList="description"> {gameCardDataFromContainer.description}</p>
                <p classList="description"> {descriptionToggle  && gameCardDataFromContainer.description === descriptionState ? gameCardDataFromContainer.description : null }</p>
                <button onClick={playAndPauseMusic}>  ▶️  ⏸ </button>
                

            </div>
        </Container>
    )
}
export default GameCard