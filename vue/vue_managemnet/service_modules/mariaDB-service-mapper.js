"use strict";

const mysql = require('mysql2/promise');
const pool = mysql.createPool(SYSTEM_CONFIG.DATABASE_MARIADB_CONNECTION_INFO);

const isShowDebugLog = SYSTEM_CONFIG.IS_SHOW_DEBUG_LOG;

// mybatis setting
const mybatisMapper = require('./mybatisMapper')();

const getConnection = async function () {
    const connection = await pool.getConnection(async conn => conn);
    return connection;
}

function getQuery(tableName, sqlId, params) {
    let query = mybatisMapper.getStatement(tableName, sqlId, params, { language: 'sql', indent: '  ' });
    return query;
}

const DB_ERR_TYPE =
{
    'NONE': 0,
    'DATA_EXIST': 10,
    'DATA_NOT_EXIST': 20,
    'QUERY_FAIL': 30,
    'DB_FAIL': 40
};

const mariaDB_serviceMapper = {};

function printInputParamAndQuery(type, params, query) {
    if (isShowDebugLog) {
        console.info('type:   ', type);
        console.info('params: ', params);
        console.info('query:  ', query);
    }
}

mariaDB_serviceMapper.getDefaultResult = function () {
    let result = {
        bResult: false,
        oResult: [],
        message: ''
    };
    return result;
}

mariaDB_serviceMapper.sqlSelect = async function (tableName, sqlId, inputParams) {
    let result = this.getDefaultResult();
    let connection = undefined;
    try {
        connection = await getConnection();
        try {
            let query = getQuery(tableName, sqlId, inputParams);

            printInputParamAndQuery('select', inputParams, query);

            let [rows, fields] = await connection.query(query);

            result.oResult = rows;
            result.bResult = true;
            result.message = 'success';
        } catch (e) {
            result.message = 'Query error';
            console.error(result.message, e);
        }
    } catch (e) {
        result.message = 'DB error';
        console.error(result.message, e);
    } finally {
        if (connection) {
            connection.release();
        }
        return result;
    }
}

mariaDB_serviceMapper.sqlSelectOne = async function (tableName, sqlId, inputParams) {
    let result = await this.sqlSelect(tableName, sqlId, inputParams);
    result.oResult = result.oResult && result.oResult[0] || result.oResult;
    return result;
}

mariaDB_serviceMapper.sqlInsert = async function (tableName, sqlId, inputParams) {
    let result = this.getDefaultResult();
    let connection = undefined;
    try {
        connection = await getConnection();
        try {
            console.log(tableName, sqlId, inputParams);
            let query = getQuery(tableName, sqlId, inputParams);

            printInputParamAndQuery('insert', inputParams, query);

            await connection.beginTransaction(); // START TRANSACTION
            let [rows, fields] = await connection.query(query);
            await connection.commit(); // COMMIT

            result.oResult.idx = rows.insertId;
            // result.oResult = true;
            result.bResult = true;
            result.message = 'success';
        } catch (e) {
            await connection.rollback(); // ROLLBACK
            result.message = 'Query error';
            console.error(result.message, e);
        }
    } catch (e) {
        result.message = 'DB error';
        console.error(result.message, e);
    } finally {
        if (connection) {
            connection.release();
        }
        return result;
    }
}

mariaDB_serviceMapper.sqlUpdate = async function (tableName, sqlId, inputParams) {
    let result = this.getDefaultResult();
    let connection = undefined;
    try {
        connection = await getConnection();
        try {
            let query = getQuery(tableName, sqlId, inputParams);

            printInputParamAndQuery('update', inputParams, query);

            await connection.beginTransaction(); // START TRANSACTION
            let [rows, fields] = await connection.query(query);
            await connection.commit(); // COMMIT

            // result.oResult = { changedRows: rows.changedRows };
            result.oResult = true;
            result.bResult = true;
            result.message = 'success';
        } catch (e) {
            await connection.rollback(); // ROLLBACK
            result.message = 'Query error';
            console.error(result.message, e);
        }
    } catch (e) {
        result.message = 'DB error';
        console.error(result.message, e);
    } finally {
        if (connection) {
            connection.release();
        }
        return result;
    }
}

mariaDB_serviceMapper.sqlDelete = async function (tableName, sqlId, inputParams) {
    let result = this.getDefaultResult();
    let connection = undefined;
    try {
        connection = await getConnection();
        try {
            let query = getQuery(tableName, sqlId, inputParams);

            printInputParamAndQuery('delete', inputParams, query);

            await connection.beginTransaction(); // START TRANSACTION
            let [rows, fields] = await connection.query(query);
            await connection.commit(); // COMMIT

            // result.oResult = { changedRows: rows.changedRows };
            result.oResult = true;
            result.bResult = true;
            result.message = 'success';
        } catch (e) {
            await connection.rollback(); // ROLLBACK
            result.message = 'Query error';
            console.error(result.message, e);
        }
    } catch (e) {
        result.message = 'DB error';
        console.error(result.message, e);
    } finally {
        if (connection) {
            connection.release();
        }
        return result;
    }
}

module.exports = mariaDB_serviceMapper;