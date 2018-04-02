var express = require('express');
var router = express.Router();
var config = require('../config');
var builds = require('../builds/build_time');
var pluginsLoaded = require("../pluginsConfig");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'SDP',
    config:{
        name:'翟凯'
    },
    architectConfig:getConfig()
    // architectConfig: getConfig(),
    // timestamp:builds.timestamp
});
});


function getConfig() {
    var plugins = [];

    var basePlugins = pluginsLoaded;
    plugins = plugins.concat(basePlugins);
    return plugins;
}
module.exports = router;
