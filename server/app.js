const express = require('express');
const app = express();
const router = require('./router.js')
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');


app.use(parser.json());
app.use(cors());
app.use(parser.urlencoded({
    extended: true
}));
app.get('loaderio-e01b7ecc0c6ac0c75eb88cced38dcaa2.txt', function(req, res) {
    res.sendFile('/Users/home/ubuntu/searchBarSDC/client/dist/loaderio-e01b7ecc0c6ac0c75eb88cced38dcaa2.txt')
})
app.use('/api/', router);
app.use(express.static(path.join(__dirname, '../client/dist')));


module.exports = app;