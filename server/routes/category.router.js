const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const text = req.body
  console.log('OUR DATA!', id, text);
  const queryText = `UPDATE "image"
  SET category_id = ${req.body.category}
  WHERE id = ${id};`;

  pool.query (queryText)
  .then (response => {
    console.log(response);
    res.sendStatus(200)
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})



module.exports = router;
