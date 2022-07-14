import {Link } from "react-router-dom";
import styled from "styled-components";


const Nav = styled.div`
    background-image: linear-gradient(to top left, #ffb5e8, #b28dff, #dcd3ff,  #ffc9de, #6eb5ff);
    text-align: center;
    text-shadow: 1px 1px #1f3063; 
    padding: 10px 15px 10px 15px;
    margin-left: 115px;
    // DONE✅
`


const NavBar= ()=>{
    return (
        <>
        <Nav>
            <div className="NavMenu">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/newgames">
                    <p>Add a New Game</p>
                </Link>
                <Link to="/games">
                    <p> Games </p>
                </Link>
            </div>
        </Nav>
        
        </>
    )
}
export default NavBar