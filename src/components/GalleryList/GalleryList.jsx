import GalleryItem from "../GalleryItem/GalleryItem";
import { useSelector } from 'react-redux'
import './GalleryList.css'
import axios from 'axios'

function GalleryList() {


    const handleClick = (url) => {
        console.log('in click');
        console.log(url);

        axios.post('/api/favorite', {url: url} )
        .then (response => {
            console.log(response);
        })
    }

    const store = useSelector(store => store.giphyItems)
    return(
        <div className="listDiv">
        {store.map(pic => {
            return (
                <div key={pic.images.original.url} className="imageDiv">
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