"use strict";

// mybatis setting
const mariaDB = require("./mariaDB-service-mapper.js");
const baseService = require("./base-service")(mariaDB);
const service = {};
const DATAS = require("./serviceData");
module.exports = service;

service.getErrorResult = baseService.getErrorResult;

service.getCodeList = async (categoryName) => {
  let selectDAO = DATAS.CodeInfo.getClassObject({ categoryName });

  const tableName = selectDAO.getTableName();
  let params = baseService.getSearchParams(selectDAO);
  let ro = await baseService.select(tableName, "select-list", params);

  return ro;
};

service.getCode = async (categoryName, codeName) => {
  let selectDAO = DATAS.CodeInfo.getClassObject({ categoryName, codeName });

  const tableName = selectDAO.getTableName();
  let params = baseService.getSearchParams(selectDAO);
  let ro = await baseService.selectOne(tableName, "select-list", params);

  return ro;
};

service.login = async (id, password) => {
  let selectDAO = DATAS.UserInfo.getClassObject({ id, password });

  const tableName = selectDAO.getTableName();
  let params = baseService.getSearchParams(selectDAO);
  let ro = await baseService.selectOne(tableName, "select-list", params);

  if (!ro.bResult) {
    return baseService.getErrorResult("아이디 또는 비밀번호를 확인해주세요.");
  }
  return ro;
};

service.getBoardList = async (
  board_type_code,
  page,
  title,
  user_idx,
  nickname
) => {
  if (page) {
    page *= 10;
  }

  let selectDAO = DATAS.BoardInfo.getClassObject({
    boardTypeCode: board_type_code,
    title: title,
    userIdx: user_idx,
  });

  const tableName = selectDAO.getTableName();
  let params = baseService.getSearchParams(selectDAO);
  params.searchFilter.page = page;

  let ro = await baseService.select(tableName, "select-list", params);

  if (!ro.bResult) {
    return baseService.getErrorResult("결과를 찾을 수 없습니다.");
  } else if (ro.oResult.length > 0) {
    ro.count = ro.oResult[0].count;
  } else {
    ro.count = 0;
  }

  return ro;
};
