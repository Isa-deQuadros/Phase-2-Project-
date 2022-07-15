import {Link } from "react-router-dom";
import styled from "styled-components";


const Nav = styled.div`
    background-image: linear-gradient(to top left, #ffb5e8, #b28dff, #dcd3ff,  #ffc9de, #6eb5ff);
    text-align: center;
    text-shadow: 1px 1px #1f3063; 
    display:flex;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 10px 15px 10px 15px;
    margin-left: 115px;
    border-radius: 15px;
    // DONE✅
`


const NavBar= ()=>{
    return (
        <>
        <Nav>
            <div className="nav-menu">
                <Link to="/" className="link">
                    Home
                </Link>
                <Link to="/newgames" className="link">
                    Add a New Game
                </Link>
                <Link to="/games" className="link">
                     Games 
                </Link>
            </div>
        </Nav>
        
        </>
    )
}
export default NavBar