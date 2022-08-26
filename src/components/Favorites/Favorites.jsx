import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import FavoritesItem from "../FavoritesItem/FavoritesItem";
import './Favorites.css'

function Favorites() {

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_GIF'
    })
  }, [])

  const giphyFavs = useSelector((store) => store.giphyFavs);

  const handleBack = () => {
    console.log('SEND TO PREVIOUS PAGE');
    history.push('/');
  };
  return (
    <>
      <h1>Favorites</h1>
      <span className="right"><button onClick={handleBack}>Back</button></span>
      <div className="listDiv">
        {giphyFavs.map(gif => (
          <div key={gif.id} className="imageDiv">
            <FavoritesItem gif={gif} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Favorites