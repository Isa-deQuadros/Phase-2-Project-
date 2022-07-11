/// USe Modal for forms 
/// https://react-bootstrap.github.io/components/modal/


import React from 'react'
import styled from 'styled-components'


const Container = styled.div`

`

function NewGameForm(){
    return (
        <Container>
            <form>
                <input type="text" placeholder='Game Title Here...' />
                <input type="text" placeholder='Release Year' />
                <input type="text" placeholder='Game Genre' />
                <input type="text" placeholder='Game Description/Synopsis'/>
                <input type="text" placeholder='Your Review Here...' />
                <select>
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
                <input type="image" placeholder='Gameplay Cover' alt="the name of the game"/>
                <input type="url" placeholder='Game Soundtrack' />
            </form>
        </Container>
    )
}
export default NewGameFrom 