const express = require('express');
const Datastore = require('nedb');

const app = express();
app.use(express.json());
app.use(express.static('public')); // <--- This serves the HTML file from the 'public' folder

const db = new Datastore({ filename: 'database.db', autoload: true });

// CREATE: Add a new user
app.post('/users', (req, res) => {
    const { firstname, lastname, age } = req.body;

    // 1. Basic validation for empty fields
    if (!firstname || !lastname || !age) {
        return res.status(400).send({ error: "Firstname, Lastname, and Age are all required." });
    }

    // 2. Age Validation
    const ageNumber = parseInt(age);
    if (isNaN(ageNumber) || ageNumber <= 0) {
        return res.status(400).send({ error: "Age must be a valid positive number." });
    }

    // 3. DUPLICATE CHECK: Check if a user with the same first and last name exists
    db.findOne({ firstname: firstname, lastname: lastname }, (err, doc) => {
        if (err) return res.status(500).send(err);

        if (doc) {
            // If doc is found, it means the user already exists
            return res.status(409).send({ error: `User ${firstname} ${lastname} already exists in the database!` });
        }

        // If no duplicate found, proceed to insert
        db.insert({ 
            firstname: firstname, 
            lastname: lastname, 
            age: ageNumber 
        }, (insertErr, newDoc) => {
            if (insertErr) return res.status(500).send(insertErr);
            res.status(201).send(newDoc);
        });
    });
});




// READ ALL
app.get('/users', (req, res) => {
    db.find({}, (err, docs) => {
        if (err) return res.status(500).send(err);
        res.send(docs);
    });
});

// SEARCH
app.get('/search', (req, res) => {
    const { firstname, lastname } = req.query;
    const query = {};
    if (firstname) query.firstname = new RegExp(firstname, 'i');
    if (lastname) query.lastname = new RegExp(lastname, 'i');
    db.find(query, (err, docs) => {
        if (err) return res.status(500).send(err);
        res.send(docs);
    });
});

// UPDATE: Edit user details by ID
app.put('/users/:id', (req, res) => {
    const { firstname, lastname, age } = req.body;

    // 1. Check if all fields are present
    if (!firstname || !lastname || !age) {
        return res.status(400).send({ error: "All fields are required to update the user." });
    }

    // 2. Validate Age: Convert to number and check if it is a valid positive integer
    const ageNumber = parseInt(age);
    if (isNaN(ageNumber) || ageNumber <= 0) {
        return res.status(400).send({ error: "Age must be a valid positive number." });
    }

    // Update database using the cleaned number
    db.update(
        { _id: req.params.id }, 
        { $set: { firstname: firstname, lastname: lastname, age: ageNumber } }, 
        { multi: false }, 
        (err, numReplaced) => {
            if (err) return res.status(500).send(err);
            res.send({ message: "User updated successfully" });
        }
    );
});



// DELETE
app.delete('/users/:id', (req, res) => {
    db.remove({ _id: req.params.id }, {}, (err, num) => {
        if (err) return res.status(500).send(err);
        res.send({ message: "Deleted successfully" });
    });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
