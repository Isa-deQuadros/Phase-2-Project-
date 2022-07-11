import React from 'react'
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
  
  return (
    <Container>

      < Header />
      <Profile />
      <MainContainer />

    </Container>
  )
}
export default App