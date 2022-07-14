import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";

import styled from 'styled-components'


import Header from './Header'
import MainContainer from './MainContainer'
import GameCard from './GameCard'
import NewGameForm from './NewGameForm'
import Home from './Home'


const Container = styled.div`
  // background-color: #310ca9;
  // color: #82f0f0;
  // text-align: center; 
`




function App() {
  const [gameCardData, setGameCardData] = useState([])


useEffect(()=>{
  fetch("http://localhost:3002/gameCard")
  .then(res=> res.json())
  .then((fetchedData)=>{
  setGameCardData([...fetchedData])
  })
  },[])


  function addNewGame(newGame) {
    console([newGame, ...gameCardData])

    fetch("http://localhost:3002/gameCard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGame)
    })
  }

  return (
    <Container>

      < Header/>
      <Routes>

        <Route path="/" element={
          <Home/>}>
        </Route>
        <Route path="/games" element={<MainContainer  gameCardDataFromApp={gameCardData}
        functionForForm={addNewGame}/>} ></Route>
        <Route path="/newgames" element={<NewGameForm />} ></Route>
      </Routes>

    </Container>
  )
}
export default App


//App
//Header
  //NavBar
//Profile
//MainContainer
  //NewGameForm  //GameCard //ResponsivePlayer