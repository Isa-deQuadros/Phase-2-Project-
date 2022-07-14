import styled from "styled-components";
import React, {useState} from "react"

import GameCard from "./GameCard";
import ResponsivePlayer from "./ResponsivePlayer";
import NewGameForm from "./NewGameForm";


const Container = styled.div`

    border-top: 20px solid #1bbb18;
    background-image: url('https://img.pixers.pics/pho_wat(s3:700/FO/17/98/51/75/1/700_FO179851751_7d4a8c10ee6ccaa3d021b92c001e5ca0,700,394,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,344,jpg)/wall-murals-retro-game-controller-on-colorful-background-3d-illustration.jpg.jpg');
        // DONEDONE



    h2{
        font-size: 30px;
        color: #e60333;
        // DONE✅
    }
    h3{
        font-size: 20px;
        text-align: center;
        background-color: #657c7c;
        // DONE✅
        margin-right: 20px
    }

    h4{
        font-size: 30px;
        background-color: #01426e;
        // DONE 
    }
    // 
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
        background-image: linear-gradient( to top, white, #5362c4, #334379);
        // DONE✅
    }
`

const NewGameFormButton = styled.button`
    background-color: teal;
    // DONE✅
    border-radius: 3px;
    border: 5px solid #065b64;
    // DONE✅
    font-size: 23.5px;
    // color:white;
    margin: 10px 0 20px 0;
`

function GamesContainer({gameCardDataFromApp, functionForForm}){
    
    const [title, setTitle] = useState("Title of Game")
    const [reviews, setReviews] = useState("")
    const [formDisplay, setFormDisplay] = useState(false)
    const [url, setUrlState] = useState("")
    const [descriptionToggle, setDescriptionToggle] = useState(false)
    const [descriptionState, setDescriptionState] = useState("")



    function renderGame(gameName, gameReview, gameVideo, gameDescription){ 
        setTitle(gameName)
        setReviews(gameReview)
        setUrlState(gameVideo)
        setDescriptionState(gameDescription)
        setDescriptionToggle(!descriptionToggle)
        

    }

    function displayForm(){
        setFormDisplay(!formDisplay)
    }
    

    return(
        
        <Container>
            <h2> {title} </h2>
            <NewGameFormButton onClick={displayForm}> Click To Add New Game</NewGameFormButton> 
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
                        {/* some math function that turns the percentage into x number of controllers */}
                    </div>

            </div>
                <div className="GameListTitle">
                    <h2> Game List: </h2>         

                <div className="GameList">
                    { gameCardDataFromApp.map((mappedArrayOfGames)=>{
                        return(   
                            <GameCard 
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