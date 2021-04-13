"use strict";

const baseService = {};
var databaseServiceMapper = undefined;

module.exports = function (database) {
    databaseServiceMapper = database;
    return baseService;
};

baseService.getDefaultParams = function () {
    let params = {
        insertData: {},
        updateData: {},
        searchFilter: {}
        , setInsertData: function (dataObject) { this.insertData = dataObject; }
        , setUpdateData: function (dataObject) { this.updateData = dataObject; }
        , setFilterData: function (dataObject) { this.searchFilter = dataObject; }
    };
    return params;
}

baseService.getParams = function (selectDAO, insertDAO, updateDAO) {
    let params = {
        insertData: insertDAO ? insertDAO : {},
        updateData: updateDAO ? updateDAO : {},
        searchFilter: selectDAO ? selectDAO : {}
    }
    return params;
}

baseService.getSearchParams = function (selectDAO) {
    return this.getParams(selectDAO);
}

baseService.getInsertParams = function (insertDAO) {
    return this.getParams(undefined, insertDAO);
}

baseService.getUpdateParams = function (selectDAO, updateDAO) {
    return this.getParams(selectDAO, undefined, updateDAO);
}

baseService.getErrorResult = function (message) {
    let errResult = databaseServiceMapper.getDefaultResult();
    errResult.message = message || '';
    return errResult;
}

baseService.insert = async function (tableName, sqlId, params) {
    let resultData = await databaseServiceMapper.sqlInsert(tableName, sqlId, params);

    if (!resultData.bResult) {
        resultData.message = '문제가 발생하였습니다. 다시 시도하세요.';
    }
    
    // if(ro.bResult) {
    //     return ro.oResult.idx;
    // }
    // return -1;
    return resultData;
}

baseService.select = async function (tableName, sqlId, params) {
    let resultData = await databaseServiceMapper.sqlSelect(tableName, sqlId, params);

    if (!resultData.bResult) {
        resultData.message = '문제가 발생하였습니다. 다시 시도하세요.';
    }
    // return resultData.oResult;
    return resultData;
}

baseService.selectOne = async function (tableName, sqlId, params) {
    let resultData = await databaseServiceMapper.sqlSelectOne(tableName, sqlId, params);

    if (!resultData.bResult) {
        resultData.message = '문제가 발생하였습니다. 다시 시도하세요.';
    } else if (Object.keys(resultData.oResult).length == 0) {
        resultData.bResult = false;
        resultData.message = '검색결과가 없습니다.';
    }
    // return resultData.oResult;
    return resultData;
}

baseService.update = async function (tableName, sqlId, params) {
    let resultData = await databaseServiceMapper.sqlUpdate(tableName, sqlId, params);

    if (!resultData.bResult) {
        resultData.message = '문제가 발생하였습니다. 다시 시도하세요.';
    }
    // return resultData.bResult;
    return resultData;
}

baseService.delete = async function (tableName, sqlId, params) {
    let resultData = await databaseServiceMapper.sqlDelete(tableName, sqlId, params);

    if (!resultData.bResult) {
        resultData.message = '문제가 발생하였습니다. 다시 시도하세요.';
    }
    // return resultData.bResult;
    return resultData;
}

baseService.testMariaDB = async function () {
    let params = baseService.getDefaultParams();

    let resultData = await baseService.select('access_check', 'select-test', params);
    return resultData;
}

