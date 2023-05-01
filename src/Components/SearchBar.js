import styled from "styled-components";

const Searchs = styled.div`
  margin: 0 0 10px 0;

  .search {
    background-color: #ae9;
    height: 25px;
    width: 250px;
  }
`;

function Searchbar({ handleingtheSearch }) {
  return (
    <Searchs>
      <input
        type="text"
        className="search"
        placeholder="Search by Name and Genre..."
        onChange={(synthEvent) => handleingtheSearch(synthEvent.target.value)}
      />
    </Searchs>
  );
}
export default Searchbar;
