import GalleryItem from "../GalleryItem/GalleryItem";
import { useSelector } from 'react-redux'
import './GalleryList.css'

function GalleryList() {

    const store = useSelector(store => store.giphyItems)
    return(
        <div className="listDiv">
        {store.map(pic => {
            return (
                <div key={pic.images.original.url} className="imageDiv">
                <img src={pic.images.original.url}/>
                <button>Favorite</button>
                </div>
                // <GalleryItem imageURL={pic.images.original.url}/>
            )
        })}
        </div>
    )
}

export default GalleryList