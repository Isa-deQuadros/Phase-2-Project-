import styled from "styled-components";
import { useState } from "react";


const Container = styled.div`
    background-color:#281474 ;
    width: 50%;

    h3{
        font-size: 30px;
        margin: 10px 50px 10px 0;
    }
`

function Profile(){

    return(
        <Container>
            <img src ="https://st2.depositphotos.com/1288156/49269/v/380/depositphotos_492694300-stock-illustration-blank-placeholder-profile-picture-vector.jpg?forcejpeg=true"
                height={90} 
                width= {90}
                quality={100}
                />
            <h3>Iris Keegan Isa </h3>
        </Container>
    )
}
export default Profile