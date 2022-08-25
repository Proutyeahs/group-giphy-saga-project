import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import FavoritesItem from "../FavoritesItem/FavoritesItem";

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
      <ul>
        {giphyFavs.map(gif => (
          <li key={gif.id}>
            <FavoritesItem gif={gif}/>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Favorites