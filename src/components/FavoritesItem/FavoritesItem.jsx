
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
function FavoritesItem({ gif }) {

    const dispatch = useDispatch()

    // const dropDownChange = (cat) => {
    //     console.log(cat);
    //     dispatch({
    //         type: 'SET_CAT',
    //         payload: { id: gif.id, category: cat }
    //     })
    // }

    // return (
    //     <>
    //         <img src={gif.url} />
    //         <label htmlFor="category">Select a category</label>

    //         <select name="category" id="category">
    //             <option value=""></option>
    //             <option  onChange={() => dropDownChange(1)} value="Funny">Funny</option>
    //             <option value="Cohort">Cohort</option>
    //             <option value="Cartoon">Cartoon</option>
    //             <option value="NSFW">NSFW</option>
    //             <option value="Meme">Meme</option>
    //         </select>


    const remove = (id) => {
        dispatch({
            type: 'DELETE_GIF',
            payload: id
        })
    }

    return (
        <>
            <img src={gif.url} />
            <Button variant="contained" color="secondary" onClick={() => remove(gif.id)}>Delete</Button>

        </>
    )
}

export default FavoritesItem
