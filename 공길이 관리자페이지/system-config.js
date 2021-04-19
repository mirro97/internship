"use strict";

global.SYSTEM_CONFIG = {};
if (Object.keys(SYSTEM_CONFIG).length != 0) {
  return;
}
const path = require("path");
console.info("Global SYSTEM_CONFIG init");

SYSTEM_CONFIG.FILE_STORAGE_ROOT_PATH = path.join(__dirname, "../FileStorage");

SYSTEM_CONFIG.SSL_KEYSTORE_PUB = {
  ca: path.join(
    "d:/Apache24/keystore/wildcard-orcasoft.co.kr",
    "orcasoft.co.kr-chain.pem"
  ),
  cert: path.join(
    "d:/Apache24/keystore/wildcard-orcasoft.co.kr",
    "orcasoft.co.kr-crt.pem"
  ),
  key: path.join(
    "d:/Apache24/keystore/wildcard-orcasoft.co.kr",
    "orcasoft.co.kr-key.pem"
  ),
};

SYSTEM_CONFIG.SSL_KEYSTORE_DEV = {
  ca: path.join(
    "d:/Apache24/keystore/wildcard-orcasoft.co.kr",
    "orcasoft.co.kr-chain.pem"
  ),
  cert: path.join(
    "d:/Apache24/keystore/wildcard-orcasoft.co.kr",
    "orcasoft.co.kr-crt.pem"
  ),
  key: path.join(
    "d:/Apache24/keystore/wildcard-orcasoft.co.kr",
    "orcasoft.co.kr-key.pem"
  ),
};

SYSTEM_CONFIG.DATABASE_MARIADB_CONNECTION_INFO = {
  host: "db.orcasoft.co.kr",
  port: 3306,
  user: "gongil",
  password: "gongil12#$",
  database: "gongil",
  dateStrings: true,
  // timezone: "+09:00",
};

SYSTEM_CONFIG.IS_DEV = true;
SYSTEM_CONFIG.IS_SHOW_DEBUG_LOG = true;
//SYSTEM_CONFIG.IS_SHOW_DEBUG_LOG = false;

SYSTEM_CONFIG.MARIADB_SERVICE = require("./service_modules/service");
Object.freeze(SYSTEM_CONFIG);
