import { useDispatch } from "react-redux"
import Button from '@material-ui/core/Button';

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
            <Button variant="contained" color="secondary" onClick={() => remove(gif.id)}>Delete</Button>
        </>
    )
}

export default FavoritesItem
