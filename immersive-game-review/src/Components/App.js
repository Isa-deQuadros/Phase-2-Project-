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
  const [searching, setSearchingThings] = useState([])


useEffect(()=>{
  fetch("http://localhost:3002/gameCard")
  .then(res=> res.json())
  .then((fetchedData)=>{
  setGameCardData([...fetchedData])
  setSearchingThings(fetchedData)
  })
  },[])


  function addNewGame(newGame) {
    setGameCardData([newGame, ...gameCardData])

    fetch("http://localhost:3002/gameCard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGame)
    })
  }

  function handleingtheSearch(thethingsItypeintotheSearchBar){
    let resultofSearch= searching.filter((whatItype)=> {
      if(whatItype.name.toLowerCase().includes(thethingsItypeintotheSearchBar.toLowerCase())){
        return whatItype
      }else if (whatItype.genre.toLowerCase().includes(thethingsItypeintotheSearchBar.toLowerCase())){
        return whatItype
      }
    })
    setGameCardData(resultofSearch)

  }

  return (
    <Container>

      < Header/>
      <Routes>

        <Route path="/" element={
          <Home/>}>
        </Route>
        <Route path="/games" element={<MainContainer  gameCardDataFromApp={gameCardData}
        functionForForm={addNewGame} handleingtheSearch={handleingtheSearch}/>} ></Route>
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