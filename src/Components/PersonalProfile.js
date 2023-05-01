import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  padding-right: 120px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Modal = styled.div`
  right: 20px;
  opacity: 85%;
`;

const Content = styled.div`
  background-color: #935891;
  width: 400px;
  margin-right: 10px;
  border-radius: 15px;

  .modal-body {
    padding: 15px;
    border-top: 1px solid #eee;
  }

  h6 {
    font-weight: 900;
  }

  modal-title {
    text-align: center;
  }
`;

function Profile() {
  const [openProfile, closedProfile] = useState(false);

  function setProfileToggle() {
    closedProfile(!openProfile);
  }

  return (
    <Container onClick={setProfileToggle}>
      <div>
        <img
          className="avatar-box"
          alt="avatar"
          src="https://i.kym-cdn.com/photos/images/newsfeed/001/513/511/b18.png"
          height={60}
          width={120}
          quality={100}
        />
      </div>

      {openProfile ? (
        <Modal>
          <Content>
            <div className="modal-header">
              <h4 className="modal-title"> ✨ Hello Cohort B ✨ </h4>
              <div className="modal-body">
                <h3>Favorite Game: Super Mario Sunshine</h3>
                <p>
                  {" "}
                  Bio: Iris, Keegan, and Isa are Software engineers who love to
                  game. Here are their favorite games, and their idea for an
                  immersive game review experience. Enjoy the music, and add
                  your favorites to the mix!
                </p>
              </div>
            </div>
          </Content>
        </Modal>
      ) : null}
    </Container>
  );
}
export default Profile;
