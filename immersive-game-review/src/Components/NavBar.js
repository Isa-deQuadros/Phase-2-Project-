import {Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
    color: white;
`


const NavBar= ()=>{
    return (
        <>
        <Nav>
            <div className="NavMenu">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/games/Form">
                    <p>Add a New Game</p>
                </Link>
                <Link to="/games">
                    <p> Games </p>
                </Link>
                <Link to="/profile">
                    <p> Your Profile </p>
                </Link>
            </div>
        </Nav>
        
        </>
    )
}
export default NavBar