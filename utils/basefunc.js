/**
 * Created by garysr on 2017/3/7.
 */

//是否为undefined和空,不为空返回true
exports.noneStr = function (str) {
    if(str == undefined || str == "") {
        return false;
    }
    return true;
};