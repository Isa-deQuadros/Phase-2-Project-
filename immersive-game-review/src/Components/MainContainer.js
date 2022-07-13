import styled from "styled-components";
import React, {useState} from "react"

import GameCard from "./GameCard";
import ResponsivePlayer from "./ResponsivePlayer";
import NewGameForm from "./NewGameForm";


const Container = styled.div`
    border-top: 20px solid #1bbb18;

    h2{
        font-size: 30px;
        color: #edc132;
    }
    h4{
        font-size: 20px;
        text-align: center;
    }
    .DataDisplay{
        margin-bottom: 20px;
    }
    .Reviews{
        background-color: #62cda6;
        max-width: 35%;
        align-self:center;
    }

    .GameTrailer{
        // background-color: #4fc666;
        // max-width: 50%;
    
    }
    .GameList{
        background-color: #62cda6;
    }
`

const NewGameFormButton = styled.button`
    background-color: #b659b1;
    border-radius: 3px;
    border: 5px solid gray;
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
                        <p>{reviews.first}</p>
                        <p>{reviews.second}</p>
                        <p>{reviews.third}</p>
                        {/* some math function that turns the percentage into x number of controllers */}
                    </div>

            </div>
                <div className="GameListTitle">
                    <h4> Game List: </h4>         
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