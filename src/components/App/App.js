import React from 'react';
import GalleryList from '../GalleryList/GalleryList';
import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Favorites />
    </div>
  );
}

export default App;
