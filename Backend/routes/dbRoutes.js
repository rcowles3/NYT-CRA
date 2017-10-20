/**
 * API
 ===============================================
 * This is the file that will handle the post to
 * the database that will saved and delete
 * articles.
 */

let express = require('express');
let bodyParser = require('body-parser');
let logger = require('morgan');
let mongoose = require('mongoose');
let Article = require('../models/Article');

let app = express();
let articleRouter = express.Router();

// Use middlewares to set view engine and post json data to the server
app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
    next();
});

articleRouter.route('/save').post((req, res) => {
    
    let data = req.body.SaveArticle;
    let saveArticle = new Article(data);
    console.log('Model\n\n', saveArticle);

    saveArticle.save().then(saveArticle => {
        res.status(200);        
    }).catch(err => {
        res.status(400).send("Please review log, and resolve errors.")
    })
});

module.exports = articleRouter;
