import styled from "styled-components";
import React, {useState} from "react"
import GameCard from "./GameCard";


const Container = styled.div`
    border-top: 20px solid #1bbb18;

    h2{
        font-size: 30px;
        color: #edc132;
    }
    h4{
        font-size: 20px;
    }
    .DataDisplay{
        display: inline-flex;
        justify-content: space-between;
    }
    .Reviews{
        background-color: #62cda6;
        max-width: 35%;
    }

    .MusicTrailer{
        background-color: #4fc666;
        max-width: 55%;
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

function GamesContainer({gameCardDataFromApp}){
    console.log("gamecontainer data:", gameCardDataFromApp)
    const [title, setTitle] = useState("Title of Game")
    const [reviews, setReviews] = useState("Reviews")

    function renderGame(gameName, gameReview){
        setTitle(gameName)
        setReviews(gameReview)
    }
    

    return(
        <Container>
            <h2> {title} </h2>
            <NewGameFormButton> Click To Add New Game</NewGameFormButton> 
            <br/>
            <div className="DataDisplay">
                < div className="MusicTrailer">
                <h4> Trailer </h4>
                <div div className="AltImgB4Video">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9sSoOkqBqFnlWl566nN0PTMMwkShd7ZUAg&usqp=CAU"
                        width={200}
                        height={200}
                        quality={100}/>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/007/836/374/small/cartoon-loading-bar-for-game-interface-filled-bar-to-download-or-show-resources-design-element-cartoon-illustration-web-ui-design-vector.jpg" 
                        width={200}
                        height={50}
                        quality={100}/>

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
            <div className="GameList">
                { gameCardDataFromApp.map((mappedArrayOfGames)=>{
                    return(  
                    <h4> 
                        <GameCard 
                        gameCardDataFromContainer={mappedArrayOfGames}
                        renderGame={renderGame}
                        key={mappedArrayOfGames.id} /> 
                    </h4>
                    )
                })
                }
                </div>


        </Container>
    )
}
export default GamesContainer