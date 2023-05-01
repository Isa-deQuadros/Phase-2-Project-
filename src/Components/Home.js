import styled from "styled-components";

const Container = styled.div``;

function Home() {
  return (
    <Container>
      <div className="home-wrapper">
        <h3 className="home-words"> An Immersive Game Review </h3>
        <p className="home-words">
          {" "}
          As a user this Immersive game experience will allow you to enter the
          worlds of <br /> your favorite games using their soundtracks, as you
          rate and explore other games.
          <br /> Users can also play game trailers to checkout potential new
          games, add new games <br /> by clicking "the add new game" button. Use
          the Nav bar in the top left hand corner <br />
          to navigate between the individual elements.
        </p>
      </div>
    </Container>
  );
}
export default Home;
