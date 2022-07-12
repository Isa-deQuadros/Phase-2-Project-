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

function GameCard(){
    return(
        <Container>
            <li className="card">
                <h4> Game Title </h4>
                <p> Game Rating </p>
                <p> Description</p>
                <button> Play Soundtrack ⏯️ </button>

            </li>
        </Container>
    )
}
export default GameCard