import styled from "styled-components";
import { useState } from "react";



const Container = styled.div`
    background-color:#657c7c ;
    // DONE
    
    .avatar-box{
    
    }
`

const Modal = styled.div`
    // position: fixed;
    background-color: #008080;
    // DONE
    opacity: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Content= styled.div`
        // background-color: white
        // color: black;

    
    // .modal-header{
        // padding: 10px;
    // }

    .modal-body{
        padding: 10px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }
`

function Profile(){

    const [openProfile, closedProfile] = useState(false)

    function setProfileToggle(){
        closedProfile(!openProfile)
    }



    return(
        <Container id="profile">

            <img className="avatar-box" 
            onClick={setProfileToggle}  
            alt="avatar" 
            src ="https://cdn.discordapp.com/attachments/976609407276298250/997013793211166781/MUSIC_APP.png"
                height={60} 
                width= {70}
                quality={100}
                />
            {openProfile? 
            (<Modal>
                <Content>
                <div className="modal-header">
                    <h4 className="modal-title"> Hello Iris, Keegan, and Isa </h4>
                        <div className="modal-body">
                            <h6>Favorite Game: Super Mario Sunshine</h6>
                            <h6> Bio: </h6>
                            <p> Iris, Keegan, and Isa are Software engineers who love to game.
                                Here are their favorite games, and their idea for an immersive 
                                game review experience. Enjoy the music, and add your favorites
                                to the mix. 
                            </p>
                        </div>
                </div>
                </Content>
            </Modal>) 
            : null}
        </Container>
    )
}
export default Profile