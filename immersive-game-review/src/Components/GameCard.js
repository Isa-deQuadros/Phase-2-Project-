/// USe Modal for forms 


import styled from "styled-components";


const Container = styled.div`
    
    background-color:#62cda6 ;
    margin: 1rem;
    
    @media (min-width: 768px) {
        .cards {
    display: flex;
    flex-wrap: wrap; 
    }
    .card {
    width: calc(33% - 2rem);
    }
    }
    @media (min-width: 1024px) {
        .card {
        width: calc(25% - 2rem);
    }
    }
    @media (min-width: 1200px) {    
        .card {
        width: calc(20% - 2rem);
        }
    }



`

function GameCard({gameCardDataFromContainer, renderGame}){
    console.log("gamecard data:", gameCardDataFromContainer)
    return(
        <Container>
            <div onClick={()=>renderGame(gameCardDataFromContainer.name, gameCardDataFromContainer.reviews)}
            className="card">
                <img 
                className="card_image"
                src={gameCardDataFromContainer.imageURL}></img>
                <h4> {gameCardDataFromContainer.name} </h4>
                <p> {gameCardDataFromContainer.rating} </p>
                <p classList="description"> {gameCardDataFromContainer.description}</p>
                <button> Play Soundtrack ⏯️ </button>

            </div>
        </Container>
    )
}
export default GameCard