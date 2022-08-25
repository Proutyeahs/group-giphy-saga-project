const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();


const router = express.Router();

router.get('/:searchWord', (req, res) => {
    let searchWord = req.params.searchWord;
    console.log(searchWord);
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchWord}&limit=9`)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
  });

module.exports = router;