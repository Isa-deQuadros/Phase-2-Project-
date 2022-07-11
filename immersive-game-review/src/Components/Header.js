import React from "react"
import styled from "styled-components"

const Container = styled.div`
    background-color:#3a1198;
    padding: 5px 0 5px 0;

    

    h1{
        font-size: 36px;
        text-align: center;
    }
    
    h2{
        font-size: 25px;
    }
`


function Header(){
    return(
        <Container>
            <h1>Immersive Game Review APP</h1>
            <h2> Nav </h2>
        </Container>    
    )
}
export default Header