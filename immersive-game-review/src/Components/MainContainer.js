import styled from "styled-components";
import React, {useState} from "react"

import GameCard from "./GameCard";
import ResponsivePlayer from "./ResponsivePlayer";
import NewGameForm from "./NewGameForm";


const Container = styled.div`

    h2{
        font-size: 30px;
        color: #BEA42E;
        // DONE
    }
    h3{
        font-size: 20px;
        text-align: center;
        background-color: #657c7c;
        margin-right: 20px
    }

    h4{
        font-size: 30px;
        background-color: #657c7c;
    }
    .DataDisplay{
        margin-bottom: 20px;
        // DONE✅
    }
    .Reviews{
        background-color: #008080;
        max-width: 35%;
        align-self:center;
        // DONE✅
    }

    .GameList{
        background-color: #184950;
        // DONE✅
    }

 
`

const NewGameFormButton = styled.button`
    background-color:  #67B3E4;
    border-radius: 3px;
    border: 5px solid #7B895B;
    font-size: 23.5px;
    color:white;
    margin: 10px 0 20px 0;
`

function GamesContainer({gameCardDataFromApp, functionForForm}){
    
    const [title, setTitle] = useState("Title of Game")
    const [reviews, setReviews] = useState("")
    const [formDisplay, setFormDisplay] = useState(false)
    const [url, setUrlState] = useState("")




    function renderGame(gameName, gameReview, gameVideo){ 
        setTitle(gameName)
        setReviews(gameReview)
       setUrlState(gameVideo)
        

    }

    function displayForm(){
        setFormDisplay(!formDisplay)
    }
    

    return(
        
        <Container>
            <h2> {title} </h2>
            <NewGameFormButton onClick={displayForm}> Click To Add New Game</NewGameFormButton> 
            {formDisplay ? <NewGameForm functionForForm={functionForForm}/> : null }
            <br/>
            <div className="DataDisplay">
                < div className="GameTrailer" >

                <ResponsivePlayer urlState={url} dataForGameTrailer={gameCardDataFromApp}/>
                <div className="AltImgB4Video">
        
                </div> 
                </div>
             
                    < div className="Reviews">
                        <h4> Reviews: </h4>
                        <p> 1. {reviews.first}</p>
                        <p> 2. {reviews.second}</p>
                        <p> 3. {reviews.third}</p>
                        {/* some math function that turns the percentage into x number of controllers */}
                    </div>

            </div>
                <div className="GameListTitle">
                    <h2> Game List: </h2>         
                <div className="GameList">
                    { gameCardDataFromApp.map((mappedArrayOfGames)=>{
                        return(   
                            <GameCard 
                            gameCardDataFromContainer={mappedArrayOfGames}
                            renderGame={renderGame}
                            key={mappedArrayOfGames.id} /> 
                        )
            
                    })
                }
                </div>
                </div>
        </Container>
    )
}
export default GamesContainer