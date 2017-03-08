/**
 * Created by garysr on 2017/3/3.
 */

var constant = require('../utils/constant');
var dbcon = constant.dbconnection;
var migrate_mode = constant.migrate;

console.log('db connection:' + dbcon);
console.log('migrate mode:' + migrate_mode);

//组织表
var organizationCollection = {
    identity: 'organization',
    connection: dbcon,
    migrate: migrate_mode,
    attributes: {
        code:      {type: 'string', size:45},  //编码
        name:      {type: 'string', size:45},  //名称
        createby:  {type: 'string', size:45},  //创建人
        modifyby:  {type: 'string', size:45}   //修改人

    }
};

//应用表
var appCollection = {
    identity: 'app',
    connection: dbcon,
    migrate: migrate_mode,
    attributes: {
        code:      {type: 'string', size:45}, //编码
        name:      {type: 'string', size:45}, //名称
        org:       {mode: 'organization'}     //应用对应组织

    }
};


//用户表
var userCollection = {
    identity: 'user',
    connection: dbcon,
    migrate: migrate_mode,
    attributes: {
        code:      {type: 'string', size:45},  //编码
        name:      {type: 'string', size:45},  //名称
        password:  {type: 'string', size:45},  //密码
        img:       {type: 'string', size:450}, //头像
        type:      {type: 'string', size:450}, //用户类型: 超级用户 super,普通用户 common
        role:      {type: 'array'},            //角色
        group:     {type: 'array'},            //用户所在组
        org:       {type: 'array'},            //用户所在组织
        app:       {type: 'array'},            //可以访问的应用
        createby:  {type: 'string', size:45},  //创建人
        modifyby:  {type: 'string', size:45}   //修改人

    }
};

//用户组织表
var userCollection = {
    identity: 'user',
    connection: dbcon,
    migrate: migrate_mode,
    attributes: {
        code:      {type: 'string', size:45}, //编码
        name:      {type: 'string', size:45}, //名称
        password:  {type: 'string', size:45}, //密码
        img:       {type: 'string', size:450}, //头像
        role:      {mode: 'role'},             //角色
        group:     {mode: 'group'},            //用户所在组
        org:       {mode: 'organization'},     //用户所在组织
        app:       {mode: 'app'}               //可以访问的应用

    }
};


//角色表
var roleCollection = {
    identity: 'role',
    connection: dbcon,
    migrate: migrate_mode,
    attributes: {
        code:      {type:'string',size:45}, //编码
        name:      {type:'string',size:45}, //名称
        org:       {mode: 'organization'},  //角色所在的组织
        app:       {mode: 'app'}            //角色所在的应用
    }
};

//组表
var groupCollection = {
    identity: 'group',
    connection: dbcon,
    migrate: migrate_mode,
    attributes: {
        code:      {type:'string',size:45}, //编码
        name:      {type:'string',size:45}, //名称
        parent:    {type:'string',size:45}, //父节点
        role:      {mode: 'role'},          //角色
        org:       {mode: 'organization'},  //组所在组织
        app:       {mode: 'app'}            //组所在的应用
    }
};

//权限表
var permissionCollection = {
    identity: 'permission',
    connection: dbcon,
    migrate: migrate_mode,
    attributes: {
        code:      {type:'string',size:45}, //编码
        name:      {type:'string',size:45}, //名称
        type:      {type:'string',size:45}, //权限类型:菜单,操作
        org:       {mode: 'organization'},  //权限所在组织
        app:       {mode: 'app'}            //权限所在应用

    }
};

//菜单权限表
var menupermissionCollection = {
    identity: 'menupermission',
    connection: dbcon,
    attributes: {
        menuid:    {mode: 'menu'},          //菜单ID
        enable:    {type: 'integer'},       //允许标志
        org:       {mode: 'organization'},  //权限所在组织
        app:       {mode: 'app'}            //权限所在应用

    }
};

//操作权限表
var oppermissionCollection = {
    identity: 'oppermission',
    connection: dbcon,
    migrate: migrate_mode,
    attributes: {
        opid:    {mode: 'operation'},       //操作ID
        enable:    {type: 'integer'},       //允许标志
        org:       {mode: 'organization'},  //权限所在组织
        app:       {mode: 'app'}            //权限所在应用

    }
};

//菜单表
var menuCollection = {
    identity: 'menu',
    connection: dbcon,
    migrate: migrate_mode,
    attributes: {
        level:     {mode: 'operation'},     //菜单级别: 1/一级菜单,2/二级菜单,3/三级菜单,......
        name:      {mode: 'operation'},     //名称
        parent:    {type:'string',size:45}, //父节点
        img:       {type:'string',size:450},//菜单图片
        url:       {type:'string',size:450},//菜单路径
        org:       {mode: 'organization'},  //权限所在组织
        app:       {mode: 'app'}            //权限所在应用
    }
};

module.exports = [organizationCollection,appCollection,userCollection,roleCollection,groupCollection,
    permissionCollection,menupermissionCollection,oppermissionCollection,menuCollection];
