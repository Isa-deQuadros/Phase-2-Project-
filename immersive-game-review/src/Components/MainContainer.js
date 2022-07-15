import styled from "styled-components";
import React, {useState} from "react"

import GameCard from "./GameCard";
import ResponsivePlayer from "./ResponsivePlayer";
import NewGameForm from "./NewGameForm";


const Container = styled.div`

    border-top: 20px ridge #ae9;
    // DONE✅

    background-image: linear-gradient( to top, #5d77b9, #181349);
    //DONE✅

    h2{
        font-size: 30px;
        color: #e60333;
        // DONE✅
    }
    h3{
        font-size: 20px;
        text-align: center;
        background-color: #6d9a62;
        border-bottom: 5px ridge #ae9;
        // DONE✅
        margin-right: 20px
    }
    h4{
        color: #342d86;
        font-size: 30px;
        background-image: linear-gradient(to left, #ffb5e8, #b28dff, #dcd3ff,  #ffc9de, #6eb5ff);
        // DONE ✅
        text-align: center; 
        text-shadow: 1.3px 1px #1f3063; 
    }
    
    .DataDisplay{
        margin-bottom: 20px;
        // DONE✅
    }
    .Reviews{
        background-color: #72a881;
        border: 11px double #AFCBFF;
        max-width: 35%;
        align-self:center;
        // DONE✅
    }

    .GameList{
        background-image: linear-gradient( to top, purple, #5362c4, #334379);
        // DONE✅
    }

    .GameListBarText {
        color: #342d86;
        // DONE✅
        text-shadow: 1.3px 1px #1f3063; 
        font-size: 35px;
    }

    .Responsive_Game_Title{
        color: #d7bed8;
        // DONE✅
        text-shadow: 1.3px 1px #1f3063; 
        font-size: 35px;
        text-align: center; 
    }
`

const NewGameFormButton = styled.button`
    background-color: #6d9a62;
    // DONE✅
    border-radius: 3px;
    border: 6px ridge #ae9;
    // DONE✅
    font-size: 23.5px;
    text-shadow: 1.5px 1px #1f3063; 

`

function GamesContainer({gameCardDataFromApp, functionForForm}){
    
    const [title, setTitle] = useState("Title of Game")
    const [reviews, setReviews] = useState("")
    const [formDisplay, setFormDisplay] = useState(false)
    const [url, setUrlState] = useState("")
    const [descriptionToggle, setDescriptionToggle] = useState(false)
    const [descriptionState, setDescriptionState] = useState("")
    const [newReviewState, setNewReviewState] = useState("")



    function renderGame(gameName, gameReview, gameVideo, gameDescription){ 
        setTitle(gameName)
        setReviews(gameReview)
        setUrlState(gameVideo)
        setDescriptionState(gameDescription)
        setDescriptionToggle(!descriptionToggle)
        setNewReviewState("")
        

    }

    function displayForm(){
        setFormDisplay(!formDisplay)
    }
    
    function newReviewFormFunction(newReview){
        setNewReviewState(newReview)
    }

    return(
        
        <Container>
            <h2 className="Responsive_Game_Title">  {title} </h2>
            <NewGameFormButton className="NewGameToggleButton" onClick={displayForm}> Click To Add New Game</NewGameFormButton> 
            <div className="stylingform">
                {formDisplay ? <NewGameForm functionForForm={functionForForm}/> : null }
            </div>
            <br/>
            <div className="DataDisplay">
                < div className="GameTrailer" >

                <ResponsivePlayer urlState={url}/>
                <div className="AltImgB4Video">
        
                </div> 
                </div>
                
                    < div className="Reviews">
                        <h4> Reviews: </h4>
                        <p> 1. {reviews.first}</p>
                        <p> 2. {reviews.second}</p>
                        <p> 3. {reviews.third}</p>
                        <p> 4. {newReviewState.reviews}</p>
                        {/* some math function that turns the percentage into x number of controllers */}
                    </div>

            </div>
                <div className="GameListBar">
                    <h2 className="GameListBarText"> Game List: </h2>         

                <div className="GameList">
                    { gameCardDataFromApp.map((mappedArrayOfGames)=>{
                        return(   
                            <GameCard 
                            newReviewFormFunction={newReviewFormFunction}
                            descriptionState={descriptionState}
                            descriptionToggle={descriptionToggle}
                            passingnotmapped={gameCardDataFromApp}
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