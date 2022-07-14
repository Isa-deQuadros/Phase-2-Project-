import React, { useState } from "react"
import styled from "styled-components"

import Menu from "./NavBar"


const Container = styled.div`
    background-color:#3a1198;
    padding: 5px 10px 5px 10px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

`

function Header(){

    const [openNav, ClosedNav] = useState(false)

    function ToggleNavBar(){
        ClosedNav(!openNav)
    }
    
    
    return(
        <Container>
            <div className="Nav">
                <h4> Nav </h4>
                <img src="https://www.creativefabrica.com/wp-content/uploads/2020/02/08/Menu-Icon-Graphics-1.jpg"
                    height={35}
                    width={35}
                
                onClick={ToggleNavBar}/>
                {openNav ? <Menu/> : null }
            </div>
            <h1>Immersive Game < br/> Review APP</h1>
        </Container>    
    )
}
export default Header