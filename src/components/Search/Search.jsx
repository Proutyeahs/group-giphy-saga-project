import axios from "axios";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import './Search.css'

function Search () {
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
        <input type="text" placeholder="Gif" 
        onChange={handleChange}
        value={searchWord} />
        <button onClick={handleSubmit}>SUBMIT</button>
        <span className="right"><button onClick={handleFavorites}>Favorites</button></span>
        </>
    )
}

export default Search