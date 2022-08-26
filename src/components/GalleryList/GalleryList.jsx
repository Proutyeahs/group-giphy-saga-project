import GalleryItem from "../GalleryItem/GalleryItem";
import { useSelector } from 'react-redux'
import './GalleryList.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'

function GalleryList() {

    const dispatch = useDispatch()

    const handleClick = (url) => {
        console.log('in click');
        console.log(url);

        dispatch ({
            type: 'POST_GIF',
            payload: url
        })
       
    }

    const store = useSelector(store => store.giphyItems)
    return(
        <div className="listDiv">
        {store.map(pic => {
            return (
                <div className="imageDiv">
                <img src={pic.images.original.url}/>
                <button onClick={() => handleClick(pic.images.original.url)}>Favorite</button>
                </div>
                // <GalleryItem imageURL={pic.images.original.url}/>
            )
        })}
        </div>
    )
}

export default GalleryList