/**
 * Created by garysr on 2017/3/7.
 */
var getdb = require("../utils/waterline").getDb;

/**
组织相关
 */

//创建组织
exports.create_organization = function (data,cb) {

    var org = getdb().collections.organization;
    org.create(data,function (err,ret) {
        cb(err,ret);
    })
};

//修改组织
exports.modify_organization = function (findata,updata,cb) {

    var org = getdb().collections.organization;
    org.update(findata, updata)
        .then(function (ret) {
            return cb(null, ret);
        })
        .catch(function (err) {
            return cb(err, null);
        });

};

//查询组织
exports.search_organization = function (findata,cb) {

    var org = getdb().collections.organization;
    org.find(findata)
        .exec(function (err,ret) {
            cb(err,ret);
        })
};

/**
 用户相关
 */

exports.create_user = function (data,cb) {

    var usr = getdb().collections.user;
    usr.create(data,function (err,ret) {
        cb(err,ret);
    })
};

//修改组织
exports.modify_user = function (findata,updata,cb) {

    var usr = getdb().collections.user;
    usr.update(findata, updata)
        .then(function (ret) {
            return cb(null, ret);
        })
        .catch(function (err) {
            return cb(err, null);
        });

};

//查询组织
exports.search_user = function (findata,cb) {

    var usr = getdb().collections.user;
    usr.find(findata)
        .exec(function (err,ret) {
            cb(err,ret);
        })
};

/**
 菜单相关
 */

//创建菜单
exports.create_menu = function (data,cb) {
    
    var menu = getdb().collections.menu;
    menu.create(data,function (err,ret) {
        cb(err,ret);
    })
    
};