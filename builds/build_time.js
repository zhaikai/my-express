// var fs = require('fs.extra');
var path = require('path');
var root = path.join(__dirname, '..');
var builds = path.join(root ,'builds');


 //写入构建时间
(function(){
	var timestamp =  (new Date()).getTime();
	var filePath = path.join(builds, '', 'build_config.js');
	// fs.writeFile(filePath, "module.exports = {\n	timestamp: "+timestamp+"\n}");
})();
