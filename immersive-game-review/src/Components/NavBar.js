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
                <Link to="/newgames">
                    <p>Add a New Game</p>
                </Link>
                <Link to="/games">
                    <p> Games </p>
                </Link>
                <Link to="/gamelist">
                    <p> List Of Games </p>
                </Link>
            </div>
        </Nav>
        
        </>
    )
}
export default NavBar