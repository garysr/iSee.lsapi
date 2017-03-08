/**
 * Created by garysr on 2017/3/7.
 */
var express = require('express');
var router = express.Router();


var rbac = require("../controller/rbac");

router.post('/createorg', rbac.createorganization);
router.post('/searchorg', rbac.searchorganization);

module.exports = router;