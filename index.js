const express = require('express')

const db = require('./database.js')

const app = express();

const port = 3500;

//performing CRUD operations
// RETRIEVING PATIENT DATA
app.get('/patients', (req, res) => {
    const sql = 
    `SELECT
    patient_id,
    first_name,
    last_name,
    date_of_birth
    FROM patients`;

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve data from patients'});
        }

        res.json(results);
    })
})

//RETRIEVING PROVIDER DATA
app.get('/providers', (req, res) => {
    const sql = 
    `SELECT
    first_name,
    last_name,
    provider_specialty
    FROM providers`;

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve from providers'});
        }

        res.json(results);
    })
})

// RETRIEVE PATIENT DATA BY FIRST_NAME
app.get('/patients_first_name', (req, res) => {
    const sql = 
    `SELECT
    first_name
    FROM providers`;

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve from patients'});
        }

        res.json(results);
    })
})

//RETRIEVING PROVIDER DATA BY SPECIALTY
app.get('/providers_by_specialty', (req, res) => {
    const sql = 
    `SELECT
    provider_specialty
    FROM providers`;

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve from providers'});
        }

        res.json(results);
    })
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})