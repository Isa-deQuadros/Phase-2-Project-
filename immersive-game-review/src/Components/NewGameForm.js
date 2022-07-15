
import React,{useState} from 'react'
import styled from 'styled-components'


const Container = styled.div`
// DO THIS SECTION TONIGHT
    width: 350px;
    height: fit-content;
    border: 2px solid black;
    padding: 10px;

    input{
        margin: 7px 10px 7px 10px;
    }
    select{
        margin: 7px 0px 7px 10px;
    }
    button{
        margin: 200px;
    }
    .forms{

    }

`

function NewGameForm({functionForForm}){
    const [titleState, setTitleState] = useState("")
    const [releaseYearState, setReleaseYearState] = useState("")
    const [genreState, setGenreState] = useState("")
    const [descriptionState, setDescriptionState] = useState("")
    const [reviewState, setReviewState] = useState("")
    const [ratingState, setRatingState] = useState("")
    const [coverState, setCoverState] = useState("")
    const [soundtrackState, setSoundtrackState] = useState("")

    return (
        <Container id="form">
            <form onSubmit={((event) => {
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
                    likes: 0,
                    dislikes: 0,
                }
                functionForForm(newGame)
            }
                
            )}>
                <input type="text" placeholder='Game Title Here...' value={titleState} onChange={(event)=>setTitleState(event.target.value)}/>
                <input type="text" placeholder='Release Year' value={releaseYearState} onChange={(event)=>setReleaseYearState(event.target.value)}/>
                <input type="text" placeholder='Game Genre' value={genreState} onChange={(event)=>setGenreState(event.target.value)}/>
                <input type="text" placeholder='Game Description/Synopsis' value={descriptionState} onChange={(event)=>setDescriptionState(event.target.value)}/>
                <input type="text" placeholder='Your Review Here...' value={reviewState} onChange={(event)=>setReviewState(event.target.value)}/>
                <input type="url" placeholder='Game Cover Url' alt="the name of the game" value={coverState} onChange={(event)=>setCoverState(event.target.value)}/>
                <input type="url" placeholder='Game Soundtrack Url' value={soundtrackState} onChange={(event)=>setSoundtrackState(event.target.value)}/>
                <select value={ratingState} onChange={(event)=>setRatingState(event.target.value)}>
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
                <br/>
                <button type="submit" >Add Game</button>
            </form>
        </Container>
    )
}
export default NewGameForm;