

import React, {useState, useEffect} from "react"
import styled from "styled-components";
import NewReviewForm from "./NewReviewForm";


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

function GameCard({gameCardDataFromContainer, renderGame, descriptionToggle, descriptionState, newReviewFormFunction}){
   const [musicState, setMusicState] = useState(true)
   const [audio, setAudio] = useState(new Audio(gameCardDataFromContainer.score))
   const [reviewForm, setReviewForm] = useState(false)
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

useEffect(()=> {
    setUpVotes(gameCardDataFromContainer.likes)
    setDownVotes(gameCardDataFromContainer.dislikes)
}, [])

    function updateLikes(response){
        let newupVotes = upvotes +1
        console.log(newupVotes)

        setUpVotes(newupVotes)
        
    }
    function updateDislikes(response){
        let downVTs= downvotes +1
        setDownVotes(downVTs)
    }
    
    function displayReviewForm(){
        setReviewForm(!reviewForm)
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
    function DecreaseLikes(){

        const config ={
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({dislikes: gameCardDataFromContainer.dislikes +1 })

        }
        fetch(`http://localhost:3002/gameCard/${gameCardDataFromContainer.id}`, config)
        .then(res=> res.json())
        .then(data => updateDislikes(data))

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
                <button onClick={DecreaseLikes}> {downvotes}👎 </button>
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