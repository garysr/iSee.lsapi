/**
 * Created by garysr on 2017/3/7.
 */

var rbac = require('../service/rbac');
var retinfo = require('../utils/retnfo');
var basefunc = require('../utils/basefunc');

/**
 组织相关
 */


//创建组织
exports.createorganization = function (req,res) {
    
    
    var _code = req.body.code;
    var _name = req.body.name;
    var _createby = req.body.createby;
    var _modifyby = req.body.modifyby;

    if(!basefunc.noneStr(_code))
    {
       return res.sendRsp(retinfo.STR_ISNULL,'code is undefined or null');
        
    }

    if(!basefunc.noneStr(_name))
    {
       return res.sendRsp(retinfo.STR_ISNULL,'name is undefined or null');

    }

    var orgdata = {

        code : _code,
        name : _name
    };
    
    if(basefunc.noneStr(_createby))
    {
        orgdata.createby = _createby;

    }

    if(basefunc.noneStr(_modifyby))
    {
        orgdata.modifyby = _modifyby;

    }
    

    rbac.create_organization(orgdata,function (err,data) {
        
        if(err)
        {
            return res.sendRsp(retinfo.DB_INSERT_ERR,'db insert err.'); 
        }
        else 
        {
            return res.sendSuccess(data);
        }
    })
    
};

//查询组织
exports.searchorganization = function (req,res) {
    
    var _code = req.body.code;
    var _name = req.body.name;
    var findata ={};

    if(basefunc.noneStr(_code))
    {
        findata.code = {'contains': _code};

    }
    if(basefunc.noneStr(_name))
    {
        findata.name = {'contains': _name};

    }

    rbac.search_organization(findata,function (err,data) {
        
        if(err)
        {
            return res.sendRsp(retinfo.DB_SEARCH_ERR,'db search err.');
        }
        else
        {
            return res.sendSuccess(data);
        }
        
    })

};


/**
 用户相关
 */

//创建用户
exports.createuser = function (req,res) {

    var _code = req.body.code;
    var _name = req.body.name;
    var _pwd = req.body.password;
    var _img = req.body.img;
    var _type = req.body.type;
    var _createby = req.body.createby;
    var _modifyby = req.body.modifyby;

    if(!basefunc.noneStr(_code))
    {
        return res.sendRsp(retinfo.STR_ISNULL,'code is undefined or null');

    }

    if(!basefunc.noneStr(_name))
    {
        return res.sendRsp(retinfo.STR_ISNULL,'name is undefined or null');

    }

    if(!basefunc.noneStr(_pwd))
    {
        return res.sendRsp(retinfo.STR_ISNULL,'password is undefined or null');

    }

    if(!basefunc.noneStr(_type))
    {
        return res.sendRsp(retinfo.STR_ISNULL,'type is undefined or null');

    }

    var usrdata = {

        code : _code,
        name : _name,
        password: _pwd,
        type: _type
    };


    if(basefunc.noneStr(_img))
    {
        usrdata.img = _img;

    }

    if(basefunc.noneStr(_createby))
    {
        usrdata.createby = _createby;

    }

    if(basefunc.noneStr(_modifyby))
    {
        usrdata.modifyby = _modifyby;

    }




};