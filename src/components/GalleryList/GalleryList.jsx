import GalleryItem from "../GalleryItem/GalleryItem";
import { useSelector } from 'react-redux'
import './GalleryList.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';

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
                <div key={pic.images.original.url} className="imageDiv">
                <img src={pic.images.original.url}/>
                <Button variant="contained" color="secondary" onClick={() => handleClick(pic.images.original.url)}>Favorite</Button>
                </div>
                // <GalleryItem imageURL={pic.images.original.url}/>
            )
        })}
        </div>
    )
}

export default GalleryList