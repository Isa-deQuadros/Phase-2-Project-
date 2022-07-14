/// USe Modal for forms 

import React, {useState} from "react"
import styled from "styled-components";


const Container = styled.div`
    
    background-color:#27365a ;
    // DONE
    margin: 1rem;
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

function GameCard({gameCardDataFromContainer, renderGame, updateLikes}){
   const [musicState, setMusicState] = useState(true)
   const [audio, setAudio] = useState(new Audio(gameCardDataFromContainer.score))

   const [ upvotes, setUpVotes]= useState(0)
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
        setUpVotes((gameCardDataFromApp)=>{
            return gameCardDataFromApp.map((like)=>{
                if (gameCardDataFromApp.id = like.id){
                    return updatedLike
                }else {
                    return like
                }
            })
        })
    }
    
    function increaseLikes(e){
        e.preventDefault()
        const config ={
            method:"PATCH",
            headers:{"content-type":"application/json"},
            body: JSON.stringify({likes: upvotes+ 1 })
        }
        fetch ('https://localhost:3002/gameCard/${id', config)
        .then(res=> res.json())
        .then(data => updateLikes(data))
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
                <button onClick={increaseLikes}> {gameCardDataFromContainer.likes}🔥  </button>
                <button onClick={()=> setDownVotes( downvotes +1 )}> {downvotes}👎 </button>
                <p classList="description"> {gameCardDataFromContainer.description}</p>
                <button onClick={playAndPauseMusic}>  ▶️  ⏸ </button>
                

            </div>
        </Container>
    )
}
export default GameCard