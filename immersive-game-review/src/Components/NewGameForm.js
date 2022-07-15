
import React, { useState } from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 50%;
    border: 3px ridge #ae9;
    padding: 10px;
    margin-top: 20px;

    select{
        margin: 7px 10px 7px 10px;
    }

    .new_game_form{
        // text-align: center; 
        // DONE✅
        // display: flex;
        // flex-wrap: wrap;
        // justify-content: center;
        // align-items: center;
        // font-weight: 30px;

        // display: flex;
        // flex-wrap: wrap;
        // justify-content: center;
        // align-items: center;
        // margin-top: 10px;
        // margin-left: 200px;
    }
`

function NewGameForm({ functionForForm }) {
    const [titleState, setTitleState] = useState("")
    const [releaseYearState, setReleaseYearState] = useState("")
    const [genreState, setGenreState] = useState("")
    const [descriptionState, setDescriptionState] = useState("")
    const [reviewState, setReviewState] = useState("")
    const [ratingState, setRatingState] = useState("")
    const [coverState, setCoverState] = useState("")
    const [soundtrackState, setSoundtrackState] = useState("")
    const [trailerState, setTrailerState] = useState("")

    return (
        <Container >
            <div className="form">
                <form className="new_game_form" onSubmit={((event) => {
                    event.preventDefault()

                    let newGame = {
                        name: titleState,
                        releaseYear: releaseYearState,
                        genre: genreState,
                        description: descriptionState,
                        reviews: reviewState,
                        rating: ratingState,
                        imageURL: coverState,
                        score: soundtrackState,
                        trailer: trailerState,
                        likes: 0,
                        dislikes: 0,
                    }
                    functionForForm(newGame)
                }

                )}>
                    <input type="text" placeholder='Game Title Here...' value={titleState} onChange={(event) => setTitleState(event.target.value)} />
                    <input type="text" placeholder='Release Year' value={releaseYearState} onChange={(event) => setReleaseYearState(event.target.value)} />
                    <input type="text" placeholder='Genre' value={genreState} onChange={(event) => setGenreState(event.target.value)} />
                    <input type="text" placeholder='Description...' value={descriptionState} onChange={(event) => setDescriptionState(event.target.value)} />
                    <input type="text" placeholder='Your Review...' value={reviewState} onChange={(event) => setReviewState(event.target.value)} />
                    <input type="url" placeholder='Cover Url' alt="the name of the game" value={coverState} onChange={(event) => setCoverState(event.target.value)} />
                    <input type="url" placeholder='Soundtrack Url' value={soundtrackState} onChange={(event) => setSoundtrackState(event.target.value)} />
                    <input type="url" placeholder='Game Trailer Url' value={trailerState} onChange={(event) => setTrailerState(event.target.value)} />
                    <select value={ratingState} onChange={(event) => setRatingState(event.target.value)}>
                        < option value="0"> 🎮  out of 10 🎮 </option>
                        < option value='1'> 1 </option>
                        < option value='2'> 2 </option>
                        < option value='3'> 3 </option>
                        < option value='4'> 4 </option>
                        < option value='5'> 5 </option>
                        < option value='6'> 6 </option>
                        < option value='7'> 7 </option>
                        < option value='8'> 8 </option>
                        < option value='9'> 9</option>
                        < option value='10'> 10 </option>
                    </select>
                    <br />
                    <button type="submit" >Add Game</button>
                </form>
            </div>
        </Container>
    )
}
export default NewGameForm;