const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log('In GET request');
    const queryText = 'SELECT * FROM todos ORDER BY "id";';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
});

// POST
router.post('/', (req, res) => {
    const todo = req.body;
    console.log(req.body);
    const queryText = `INSERT INTO todos
    ("todo", "isDone") VALUES ($1, $2);`;
    pool.query(queryText, [todo.todo, todo.isDone])
        .then((result) => {
            console.log(`Added todo to database`, todo);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryText}`, todo);
            res.sendStatus(500);
        })
})

// PUT
router.put('/:id', (req, res) => {
    const queryText = `UPDATE todos SET "isDone" = NOT "isDone"
    WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            console.log('PUT database query', req.params.id);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error in PUT', error);
            res.sendStatus(500);
        })
})

// DELETE
router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM todos WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            console.log(`Deleted todo with id`, req.params.id);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query`, error);
            res.sendStatus(500);
        })
})

module.exports = router;
