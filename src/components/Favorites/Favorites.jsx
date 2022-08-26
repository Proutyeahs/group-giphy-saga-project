import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import FavoritesItem from "../FavoritesItem/FavoritesItem";
import './Favorites.css'

function Favorites() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_GIF'
    })
  }, [])

  const giphyFavs = useSelector((store) => store.giphyFavs);


  return (
    <>
      <h1>Favorites</h1>
      <div className="listDiv">
        {giphyFavs.map(gif => (
          <div key={gif.id} className="imageDiv">
            <FavoritesItem gif={gif}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default Favorites