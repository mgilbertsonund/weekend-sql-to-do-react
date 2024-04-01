const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log('In GET request');
    let queryText = 'SELECT * from "tasks";';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .error((error) => {
            console.log(error);
            res.sendStatus(500);
        })
});

// POST
router,post('/', (req, res) => {
    const task = req.body;
    const queryText = `INSERT INTO "tasks" 
    ("task", "isDone") VALUES ($1, $2);`;
    pool.query(queryText, [task.task, task.idDone])
        .then((result) => {
            console.log(`Added task to database`, task);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryText}`, task);
            res.sendStatus(500);
        })
})

// PUT

// DELETE

module.exports = router;
