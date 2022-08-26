import React from 'react';
import GalleryList from '../GalleryList/GalleryList';
import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';
import Header from '../Header/Header';
import { HashRouter as Router, Route } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div>
        <Header />

        <Route path="/" exact>
          <Search />
          <GalleryList />
        </Route>

        <Route path="/favorites">
          <Favorites />
        </Route>

      </div>
    </Router>
  );
}

export default App;
