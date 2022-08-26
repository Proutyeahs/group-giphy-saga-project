import React from 'react';
import GalleryList from '../GalleryList/GalleryList';
import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';
import Header from '../Header/Header';
import './App.css'


function App(props) {
  return (
    <div>
      <Header />
      <Search />
      <Favorites />
      <GalleryList />
    </div>
  );
}

export default App;
