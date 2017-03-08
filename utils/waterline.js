/**
 * Created by garysr on 2017/3/3.
 */

var Waterline = require('waterline');
var mysqlAdapter = require('sails-mysql');
var mongoAdapter = require('sails-mongo');


if (process.env.NODE_ENV == "dev") {
    var db_config = require("../config/db_dev.json");
} else {
    var db_config = require("../config/db_product.json");
}


// 适配器
var adapters = {
    mongo: mongoAdapter,
    mysql: mysqlAdapter,
    default: 'mongo'
};




// 连接
var connections = {
    mongo: db_config.mongo,
    mysql: db_config.mysql
};

var config = {
    adapters: adapters,
    connections: connections
};

var orm = new Waterline();

function loadCollections(modelList) {
    for (var i=0;i<modelList.length;i++) {
        var collection = Waterline.Collection.extend(modelList[i]);
        orm.loadCollection(collection);
    }
}



//todo 在下面将数据表定义引入waterline
var account = require('../schema/rbac');
loadCollections(account);

var g_ontology = null;
exports.init = function(callback) {
    orm.initialize(config, function (err, ontology) {
        if (!err) {
            g_ontology = ontology
        }
        return callback(err, ontology)
    });
};

exports.getDb = function(){ return g_ontology};

exports.getCollection = function(name) {
    return g_ontology.collections[name];
};
