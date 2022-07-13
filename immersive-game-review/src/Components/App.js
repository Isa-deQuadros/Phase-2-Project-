import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


import Header from './Header'
import Profile from './PersonalProfile'
import MainContainer from './MainContainer'


const Container = styled.div`
  background-color: #310ca9;
  color:white;
  text-align: center; 
`


function App(){
const [gameCardData, setGameCardData] = useState([])

useEffect(()=>{
  fetch("http://localhost:3002/gameCard")
  .then(res=> res.json())
  .then((fetchedData)=>{
  setGameCardData([...fetchedData])
  })
  },[])

function addNewGame(newGame){
  setGameCardData([newGame, ...gameCardData])

  fetch("http://localhost:3002/gameCard",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newGame)
    })
}
  
  return (
    <Container>

      < Header />
      <Profile />
      <MainContainer gameCardDataFromApp={gameCardData} functionForForm={addNewGame} />

    </Container>
  )
}
export default App


//App
//Header
  //NavBar
//Profile
//MainContainer
  //NewGameForm  //GameCard