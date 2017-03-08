/**
 * Created by garysr on 2017/3/7.
 */
var express = require('express');

// Get prototype of HttpResponse
var responseWrapper = Object.getPrototypeOf(express.response);

// Attach customized response methods
responseWrapper.sendRsp = function(rc, msg, data,cnt) {
    var rsp = {
        retcode: rc,
        message: msg

    };

    if (cnt != undefined && cnt != null) {
        rsp.count = cnt;
    }

    if (data != undefined && data != null) {
        rsp.data = data;
    }

    this.send(rsp);
};

responseWrapper.sendSuccess = function(data,cnt) {

    if (cnt != undefined && cnt != null) {
        return this.sendRsp(200, 'SUCCESS', data, cnt);
    }
    else {
        return this.sendRsp(200, 'SUCCESS', data);

    }

};


module.exports = express;