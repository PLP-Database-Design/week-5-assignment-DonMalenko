const express = require('express')

const db = require('./database.js')

const app = express();

const port = 3500;


//Home page
app.get('/', (req, res) => {
    res.send(`
        <h1>This message is from Node.js</h1>
        <p>Use the following route to get data from database:</p>
        <ul>
            <li>Get the patients data with <strong>/patients</strong></li>
            <li>Get the providers data with <strong>/providers</strong></li>
            <li>Get providers by first name data with <strong>/providers_first_name</strong></li>
            <li>Get providers by specialty data with <strong>/providers_by_specialty</strong></li>
    
        </ul>
        <p>Enjoy your stay!</p>
    `);
});


//performing CRUD operations
// RETRIEVING PATIENT DATA
app.get('/patients', (req, res) => {
    const getPatients = 
    `SELECT
    patient_id,
    first_name,
    last_name,
    date_of_birth
    FROM patients`;

    db.query(getPatients, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve data from patients'});
        }

        res.json(results);
    })
})



//RETRIEVING PROVIDER DATA
app.get('/providers', (req, res) => {
    const getProviders = 
    `SELECT
    first_name,
    last_name,
    provider_specialty
    FROM providers`;

    db.query(getProviders, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve from providers'});
        }

        res.json(results);
    })
})

// RETRIEVE PATIENT DATA BY FIRST_NAME
app.get('/providers_first_name', (req, res) => {
    const getProvidersByName = 
    `SELECT
    first_name
    FROM providers`;

    db.query(getProvidersByName, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve from patients'});
        }

        res.json(results);
    })
})

//RETRIEVING PROVIDER DATA BY SPECIALTY
app.get('/providers_by_specialty', (req, res) => {
    const getProviderBySpecialty = 
    `SELECT
    provider_specialty
    FROM providers`;

    db.query(getProviderBySpecialty, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve from providers'});
        }

        res.json(results);
    })
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})