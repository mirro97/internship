var CBoardFileInfo = {};
CBoardFileInfo.getClassObject = function (jsonObject) {

    var boardFileInfo = {
        idx            : undefined, // field: idx             || type: int             || isNullable: NO
        boardIdx       : undefined, // field: board_idx       || type: int             || isNullable: NO
        fileIdx        : undefined, // field: file_idx        || type: int             || isNullable: NO
        filePath       : undefined, // field: file_path       || type: varchar         || isNullable: NO
        fileName       : undefined, // field: file_name       || type: varchar         || isNullable: NO
        registerDate   : undefined, // field: register_date   || type: timestamp       || isNullable: YES
    };

    boardFileInfo.setData = function (jsonObject) {
        if (jsonObject) {
            var keys = Object.keys(this);
            for (var i = 0 ; i < keys.length ; ++i) {
                var key = keys[i];
                if(jsonObject[key] !== undefined) this[key] = jsonObject[key];
            }
        }
        return this;
    };

    boardFileInfo.getTableName = function () { return 'board_file_info'; }
    boardFileInfo.setData(jsonObject);
    return boardFileInfo;
}
CBoardFileInfo.getTableName = function () { return 'board_file_info'; }
CBoardFileInfo.equals = function (obj) {
    return obj.getTableName
        ? this.getTableName() === obj.getTableName()
        : false;
}
module.exports = CBoardFileInfo