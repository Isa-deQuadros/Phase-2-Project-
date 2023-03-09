import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components'


import Header from './Header'
import MainContainer from './MainContainer'
import Footer from './Footer.js'
import NewGameForm from './NewGameForm'
import Home from './Home'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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


      < Header />
      <div className='route-container'>
        <Routes>
          <Route path="/" element={
            <Home />}>
          </Route>
          <Route path="/newgames" element={<NewGameForm />} ></Route>
          <Route path="/games" element={<MainContainer  gameCardDataFromApp={gameCardData}
        functionForForm={addNewGame} handleingtheSearch={handleingtheSearch}/>} ></Route>
          
          
        </Routes>
      

      </div>
      <Footer/>
     
      

       

    </Container>
  )
}
export default App
