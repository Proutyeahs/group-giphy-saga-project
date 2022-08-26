import axios from "axios";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import './Search.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Search() {
    const history = useHistory();
    const dispatch = useDispatch()

    const [searchWord, setSearchWord] = useState('')

    const handleSubmit = () => {
        console.log('in click');
        console.log(searchWord);
        dispatch({
            type: 'API_GET',
            payload: searchWord
        })
    }

    const handleFavorites = () => {
        console.log('SEND TO FAVORITES PAGE');
        history.push('/favorites');
    };

    const handleChange = (event) => {
        setSearchWord(event.target.value)
    }

    return (
        <>
            <div className="padding">
                <TextField id="standard-basic" type="text" label="GIF"
                    onChange={handleChange}
                    value={searchWord} />
                <Button variant="contained" color="secondary" onClick={handleSubmit}>SUBMIT</Button>
                <span className="right"><Button variant="contained" color="secondary" onClick={handleFavorites}>Favorites</Button></span>
            </div>
        </>
    )
}

export default Search