/**
 * Created by garysr on 2017/3/6.
 */


var constant ={

    dbconnection:'mongo',   //数据库连接
    migrate: 'alter'        //数据结构模式
};

Object.freeze(constant);

if (typeof module !== 'undefined' && typeof module.exports != 'undefined') {
    module.exports = constant;
}