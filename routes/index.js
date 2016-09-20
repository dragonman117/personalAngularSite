var express = require('express');
var router = express.Router();
var path = require('path');

var gen = function(app){
    /* GET home page. */
    router.get('*', function(req, res, next) {
        res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
    });

    return router;
};

module.exports = function (app){
    return gen(app);
};