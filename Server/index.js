const path = require('path');
const express = require("express");
const knex = require('./db');
const bp = require('body-parser')

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get("/HeaderInfo", (req, res) => {
    knex.select()
        .from('Heading_Content')
        .then((todos) => {
            res.json({ message: JSON.stringify(todos) });
        })

});

app.post("/ContactInfo", async (req, res) => {
    knex('Contact_Info')
        .insert({
            FirstName: req.body.firstName,
            LastName: req.body.lastName,
            Title: req.body.title,
            Email: req.body.email,
            Message: req.body.message
        })
        .then(function (result) {
            res.json({ success: true });
        })
        .catch(function (err) {
            console.log(err)
            res.json({
                success: false,
                Error: err
            })
        })

});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});