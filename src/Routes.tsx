import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Animes from 'pages/Animes';
import Filmes from 'pages/Filmes';
import Mangas from 'pages/Mangas';
import Comunidade from 'pages/Comunidade';

function App() {
  return (
      <BrowserRouter>
        <Header/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/animes' element={<Animes/>}/>
            <Route path='/filmes' element={<Filmes/>}/>
            <Route path='/mangas' element={<Mangas/>}/>
            <Route path='/comunidade' element={<Comunidade/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
