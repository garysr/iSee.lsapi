/**
 * Created by garysr on 2017/3/7.
 */

var retinfo ={



    SUCCESS: 200,           //成功
    STR_ISNULL: 300 ,       //字符串为空
    
    DB_ERR: 400,            //数据库错误
    DB_INSERT_ERR: 401,     //数据库写入失败
    DB_SEARCH_ERR: 402      //数据库查询失败

};

Object.freeze(retinfo);

if (typeof module !== 'undefined' && typeof module.exports != 'undefined') {
    module.exports = retinfo;
}