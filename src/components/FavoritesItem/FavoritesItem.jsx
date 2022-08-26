import { useDispatch } from "react-redux"

function FavoritesItem({gif}) {

    const dispatch = useDispatch();

    const remove = (id) => {
        dispatch({
            type: 'DELETE_GIF',
            payload: id
        })
    }

    return(
        <>
            <img src={gif.url} />
            <button onClick={() => remove(gif.id)}>Delete</button>
        </>
    )
}

export default FavoritesItem
