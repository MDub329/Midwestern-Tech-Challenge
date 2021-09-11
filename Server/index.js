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
        .from('heading_content')
        .then((todos) => {
            res.json({ success: true, message: JSON.stringify(todos) });
        })
        .catch(function (err) {
            console.log(err)
            res.json({
                success: false,
                Error: err
            })
        })

});

app.post("/ContactInfo", async (req, res) => {
    let emptyObjectProperty = false;
    for (var key in req.body) {
        if (req.body[key] === "") {
            emptyObjectProperty = true;
        }
    }
    if (!emptyObjectProperty) {
        knex('contact_info')
            .insert({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                title: req.body.title,
                email: req.body.email,
                message: req.body.message
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
    } else {
        res.json({
            success: false,
            error: 'One of the fields sent is empty'
        })
    }

});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});