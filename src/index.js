import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

const sagaMiddleware = createSagaMiddleware();

// This reducer is getting items from the API and saving them into an array.
const giphyItems = (state = [], action) => {
  switch (action.type) {
    case 'GIPHY_LIST':
        console.log(action.payload)
      return action.payload.data
    default:
      return state;
  }
};
// let giphyFavs = {[1,2,3,4,5]}
// This reducer is holding the favorite items from the Database.
const giphyFavs = (state = [], action) => {
  switch (action.type) {
    case 'HOLD_FAVS':
      return action.payload
    default:
      return state
  }
};

// Getting GIFs from the Database and sending it to the reducer: giphyItems, so that it's accessible.
function* getGIF(){
  console.log('yolo')
  try{
    let response = yield axios.get('/api/favorite');
    yield put({
      type: 'HOLD_FAVS',
      payload: response.data
    })
  } catch (err) {
    console.log('Err on GET', err)
  }
}

// Posting GIFs to the Database on the button click from the GalleryList. 
// Type: This will call the GET function to render on the DOM to up
function* postGIF(action){
  try {
    yield axios.post('/api/favorite', {url: action.payload})
    yield put({
      type: 'GET_GIF'
    })
  } catch (err) {
    console.log('Err on POST', err);
  }
}

function* apiGET(action){
  try{
    let response = yield axios.get(`/api/gif/${action.payload}`);
    yield put({
      type: 'GIPHY_LIST',
      payload: response.data
    })
  } catch (err) {
    console.log('ERR on apiGET', err)
  }
}

function* setCategory(action) {
  try {
    yield axios.put(`/api/category/:${action.payload.id}`, action.payload.category)
  }
  catch {

  }
}

// yield is looking for every command with 'POST_GIF' or 'GET_GIF' and then running the respective function that is tied to it.
function* rootSaga() {
  yield takeEvery('POST_GIF', postGIF)
  yield takeEvery('GET_GIF', getGIF)
  yield takeEvery('API_GET', apiGET)
  yield takeEvery ('SET_CAT', setCategory)
  }

// This sends the reducer arrays (giphyItems and giphyFavs) to the store and makes it accessible to other components.
const store = createStore(
    combineReducers({
        giphyItems,
        giphyFavs
    }),
    applyMiddleware(sagaMiddleware, logger),
  );

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
