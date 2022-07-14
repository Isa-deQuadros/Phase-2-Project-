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
    // DONE
    opacity: 85%;
    // align-items: center;
    // justify-content: center;
`
const Content= styled.div`
        background-color: #935891;
        // color: black;


    .modal-body{
        padding: 15px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
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
        <Container id="profile">

            <img className="avatar-box" 
            onClick={setProfileToggle}  
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
                    <h4 className="modal-title"> Hello Cohort B </h4>
                        <div className="modal-body">
                            <h6>Favorite Game: </h6>
                            <h6> Favorite Score: </h6>
                        </div>
                </div>
                </Content>
            </Modal>) 
            : null}
        </Container>
    )
}
export default Profile