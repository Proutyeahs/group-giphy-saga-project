import React from 'react';
import GalleryList from '../GalleryList/GalleryList';
import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';
import Header from '../Header/Header';





import Header from '../Header/Header';

function App(props) {
  return (
    <div>
      <Header />
      <h1>Giphy Search!</h1>
      <Search />
      <Favorites />
      <GalleryList />
    </div>
  );
}

export default App;
