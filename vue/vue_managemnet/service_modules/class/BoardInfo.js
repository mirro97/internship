var CBoardInfo = {};
CBoardInfo.getClassObject = function (jsonObject) {

    var boardInfo = {
        idx            : undefined, // field: idx             || type: int             || isNullable: NO
        userIdx        : undefined, // field: user_idx        || type: int             || isNullable: NO
        boardTypeCode  : undefined, // field: board_type_code || type: varchar         || isNullable: NO
        title          : undefined, // field: title           || type: varchar         || isNullable: NO
        contents       : undefined, // field: contents        || type: varchar         || isNullable: NO
        readCount      : undefined, // field: read_count      || type: int             || isNullable: YES
        registerDate   : undefined, // field: register_date   || type: timestamp       || isNullable: YES
    };

    boardInfo.setData = function (jsonObject) {
        if (jsonObject) {
            var keys = Object.keys(this);
            for (var i = 0 ; i < keys.length ; ++i) {
                var key = keys[i];
                if(jsonObject[key] !== undefined) this[key] = jsonObject[key];
            }
        }
        return this;
    };

    boardInfo.getTableName = function () { return 'board_info'; }
    boardInfo.setData(jsonObject);
    return boardInfo;
}
CBoardInfo.getTableName = function () { return 'board_info'; }
CBoardInfo.equals = function (obj) {
    return obj.getTableName
        ? this.getTableName() === obj.getTableName()
        : false;
}
module.exports = CBoardInfo