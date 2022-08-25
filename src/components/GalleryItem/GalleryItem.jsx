function GalleryItem({imgURL}) {
    return (
        <div>
            <img src={imgURL} />

            <button>Favorite</button>
        </div>
    )
}

export default GalleryItem