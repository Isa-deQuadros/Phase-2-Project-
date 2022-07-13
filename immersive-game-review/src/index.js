import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/Components/App';
import reportWebVitals from './reportWebVitals';
import {render} from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './Components/Header'
import PersonalProfile from './Components/PersonalProfile'
import MainContainer from './Components/MainContainer'
import NewGameForm from './Components/NewGameForm'
import GameCard from './Components/GameCard'






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/header" element={<Header />} />
        <Route path="/games" element={<MainContainer />} />
        <Route path="games/Form" element={<NewGameForm />} />
        <Route path="/profile" element={<PersonalProfile />} />
       {/* <Route path="/gamelist" element={<GameCard />} /> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
