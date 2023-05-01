import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  height: fit-content;
  border: 2px solid black;
  padding: 10px;

  input {
    margin: 7px 10px 7px 10px;
  }
  select {
    margin: 7px 0px 7px 10px;
  }
  button {
    margin: 10px;
  }
`;

function NewReviewForm({ newReviewFormFunction }) {
  const [reviewState, setReviewState] = useState("");
  return (
    <Container id="reviewForm">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let newReview = {
            reviews: reviewState,
          };
          newReviewFormFunction(newReview);
        }}
      >
        <input
          type="text"
          placeholder="Type Review Here..."
          value={reviewState}
          onChange={(event) => setReviewState(event.target.value)}
        />
        <button type="submit">Add Review</button>
      </form>
    </Container>
  );
}
export default NewReviewForm;
