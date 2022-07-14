import React, { useState } from "react"
import styled from "styled-components"

import NavBar from "./NavBar"
import PersonalProfile from './PersonalProfile'

const Container = styled.div`
    background-color:#3a1198;
    padding: 5px 0 5px 0;
    display:flex;
    flex-direction: row;
    justify-content: space-between;

    .personal-profile{
    width: 400px;
    height: 60px;
    margin: 20px 20px;
    }

    .nav-image{
    width: 100px;
    height: 60px;
    margin: 20px 20px;

    }

`

function Header(){

    const [openNav, ClosedNav] = useState(false)

    function ToggleNavBar(){
        ClosedNav(!openNav)
    }
    
    
    return(
        <Container>
            <div className="Nav">
                <img className="nav-image" src="https://www.creativefabrica.com/wp-content/uploads/2020/02/08/Menu-Icon-Graphics-1.jpg"
                    height={35}
                    width={35}
                    alt="nav_image"
                
                onClick={ToggleNavBar} />
                {openNav ? <NavBar/> : null }
            </div>
            <div className="personal-profile">
            <PersonalProfile />
            </div>
        </Container>    
    )
}
export default Header