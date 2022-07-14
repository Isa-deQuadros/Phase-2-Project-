import styled from "styled-components";
import { useState } from "react";



const Container = styled.div`
    background-color:white ;
    // DONE
    
    .avatar-box{
        // padding: 0px;
    }
`

const Modal = styled.div`
    // position: fixed;
    // background-color: #008080;
    right: 20px;
    // DONE
    opacity: 85%;
    // align-items: center;
    // justify-content: center;

`
const Content= styled.div`
        background-color: #935891;
        // color: black;
        width: 400px;
        margin-right: 10px;


    .modal-body{
        padding: 15px;
        border-top: 1px solid #eee;
    }

    h6 {
        font-weight: 900;
    }
`

function Profile(){

    const [openProfile, closedProfile] = useState(false)

    function setProfileToggle(){
        closedProfile(!openProfile)
    }



    return(
        <Container id="profile"  onClick={setProfileToggle} >

            <img className="avatar-box" 
            
            alt="avatar" 
            src ="https://cdn.discordapp.com/attachments/976609407276298250/997013793211166781/MUSIC_APP.png"
                height={60} 
                width= {120}
                quality={100}
                />
            {openProfile? 
            (<Modal>
                <Content>
                <div className="modal-header">

                    <h4 className="modal-title"> ✨ Hello Cohort B ✨ </h4>

                        <div className="modal-body">
                            <h3>Favorite Game: Super Mario Sunshine</h3>
                            <p> Bio: Iris, Keegan, and Isa are Software engineers who love to game.
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