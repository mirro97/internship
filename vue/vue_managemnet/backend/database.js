const fs = require("fs");
const path = require("path");
const jsonfile = require("jsonfile");

let userDataPath = path.join(__dirname, "userData.json");
let boardDataPath = path.join(__dirname, "boardData.json");

const database = {};
module.exports = database;

database.getUserList = (pageNum, name) => {
  let userList = [];
  let totalCount = 0;
  try {
    userList = jsonfile.readFileSync(userDataPath);
    if (name) {
      userList = userList.filter(function (userInfo) {
        return userInfo.name.includes(name);
      });
    }
    totalCount = userList.length;

    if (pageNum) {
      userList = userList.slice((pageNum - 1) * 10, pageNum * 10);
      userList.forEach((userInfo) => {
        userInfo.totalCount = totalCount;
      });
    }
  } catch (error) {
    console.error(error);
  }
  return userList;
};

database.deleteUser = (userIndex) => {
  let userList = [];
  try {
    userList = database.getUserList();

    let selectUser = userList.find((userInfo) => userInfo.idx == userIndex);
    userList.splice(userList.indexOf(selectUser), 1); // 클릭한 데이터 삭제

    jsonfile.writeFileSync(userDataPath, userList, { spaces: 2, EOL: "\r\n" });
  } catch (error) {
    console.error(error);
  }
  return userList;
};

var userList = database.getUserList();
userList.forEach((userInfo, idx) => {
  userInfo.idx = idx;
});
jsonfile.writeFileSync(userDataPath, userList, { spaces: 2, EOL: "\r\n" });
