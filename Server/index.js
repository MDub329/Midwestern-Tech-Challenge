const path = require('path');
const express = require("express");
const knex = require('./db');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/HeaderInfo", (req, res) => {
    knex.select()
        .from('Heading_Content')
        .then((todos) => {
            res.json({ message: JSON.stringify(todos) });
        })

});

app.post("/ContactInfo", (req, res) => {
    knex('Contact_Info')
        .insert({
            FirstName: request.body.firstName,
            LastName: request.body.lastName,
            Title: request.body.title,
            Email: request.body.email,
            Message: request.body.message
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