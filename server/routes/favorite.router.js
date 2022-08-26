const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('hi')
  const queryText = 'SELECT * FROM "image";';
  pool.query(queryText).then(result => {
    console.log(result.rows)
    res.send(result.rows)
  }).catch(err => {
    console.error(err)
    res.sendStatus(500)
  })
  // res.sendStatus(200);
});



// add a new favorite
router.post('/', (req, res) => {
  console.log('REQ IS ', req.body.url);
  let queryText = `
  INSERT INTO "image" ("url")
  VALUES ($1)
  ;`;

  pool.query(queryText, [req.body.url])
  .then(response => {
    res.sendStatus(200)
  })
  .catch (err => {
    res.sendStatus(500)
  })
  
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {
  const queryText = 'DELETE FROM "image" WHERE id=$1;';
  pool.query(queryText, [req.params.id])
  .then(() => {res.sendStatus(200);})
  .catch((err) => {
    console.error('Error in delete', err)
    res.sendStatus(500);
  })
});

module.exports = router;
