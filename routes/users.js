var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.format_json({"name":'翟凯',"age":'18'},200,"获取信息成功");
});

module.exports = router;
