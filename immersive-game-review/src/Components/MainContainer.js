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
    }
    // .Game{
    //     display: inline-flex;
    //     justify-content: space-between;
    /* } */
    
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

    function renderGame(gameName, gameReview){ 
        setTitle(gameName)
        setReviews(gameReview)
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
                <ResponsivePlayer/>
                {/* <div div className="AltImgB4Video">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/007/836/374/small/cartoon-loading-bar-for-game-interface-filled-bar-to-download-or-show-resources-design-element-cartoon-illustration-web-ui-design-vector.jpg" 
                        width={300}
                        height={50}
                        // quality={100}
                        />

                </div>  */}
                </div>
                < div className="Reviews">
                    <h4> Reviews: </h4>
                    <p>{reviews.first}</p>
                    <p>{reviews.second}</p>
                    <p>{reviews.third}</p>
                    {/* some math function that turns the percentage into x number of controllers */}
                </div>
            </div>
            <div className="GameList">
                <h4> Game List: </h4>
                { gameCardDataFromApp.map((mappedArrayOfGames)=>{
                    return( 
                        <>
                            
                            <GameCard 
                            gameCardDataFromContainer={mappedArrayOfGames}
                            renderGame={renderGame}
                            key={mappedArrayOfGames.id} /> 
                    </> 
                    )
                })
                }
                </div>
        </Container>
    )
}
export default GamesContainer