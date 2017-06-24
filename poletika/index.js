const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.NODE_PORT || 3000;
const BASE = "/api/v1";
const parser = require('rss-parser');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get(BASE, (req, res) => {
    res.json("It's a API")
});


app.get(BASE + "/rss", (req, res) => {
    parser.parseURL('http://poletika.org/rss.xml', function (err, parsed) {
        res.json(parsed);
    })
});



app.listen(3000, () => {
    console.log("App is listening in port " + port);
});