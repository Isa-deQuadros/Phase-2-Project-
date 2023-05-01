import React, { useState } from "react";
import styled from "styled-components";

import NavBar from "./NavBar";
import PersonalProfile from "./PersonalProfile";

const Container = styled.div`
  background-image: url("https://img.pixers.pics/pho_wat(s3:700/FO/17/98/51/75/1/700_FO179851751_7d4a8c10ee6ccaa3d021b92c001e5ca0,700,394,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,344,jpg)/wall-murals-retro-game-controller-on-colorful-background-3d-illustration.jpg.jpg");

  padding: 10px 0 15px 0;
  display: flex;
  justify-content: space-between;

  .nav-image {
    width: 100px;
    height: 60px;
    margin: 20px 20px;
    margin-left: 140px;
    border-radius: 15px;
  }
`;

function Header() {
  const [openNav, ClosedNav] = useState(false);

  function ToggleNavBar() {
    ClosedNav(!openNav);
  }

  return (
    <Container>
      <div className="Nav">
        <img
          className="nav-image"
          src="https://www.creativefabrica.com/wp-content/uploads/2020/02/08/Menu-Icon-Graphics-1.jpg"
          height={35}
          width={35}
          alt="nav_image"
          onClick={ToggleNavBar}
        />
        {openNav ? <NavBar /> : null}
      </div>
      <div className="personal-profile">
        <PersonalProfile />
      </div>
    </Container>
  );
}
export default Header;
