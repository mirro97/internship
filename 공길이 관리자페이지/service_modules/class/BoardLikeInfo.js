var CBoardLikeInfo = {};
CBoardLikeInfo.getClassObject = function (jsonObject) {

    var boardLikeInfo = {
        boardIdx       : undefined, // field: board_idx       || type: int             || isNullable: NO
        userIdx        : undefined, // field: user_idx        || type: int             || isNullable: NO
        registerDate   : undefined, // field: register_date   || type: timestamp       || isNullable: YES
    };

    boardLikeInfo.setData = function (jsonObject) {
        if (jsonObject) {
            var keys = Object.keys(this);
            for (var i = 0 ; i < keys.length ; ++i) {
                var key = keys[i];
                if(jsonObject[key] !== undefined) this[key] = jsonObject[key];
            }
        }
        return this;
    };

    boardLikeInfo.getTableName = function () { return 'board_like_info'; }
    boardLikeInfo.setData(jsonObject);
    return boardLikeInfo;
}
CBoardLikeInfo.getTableName = function () { return 'board_like_info'; }
CBoardLikeInfo.equals = function (obj) {
    return obj.getTableName
        ? this.getTableName() === obj.getTableName()
        : false;
}
module.exports = CBoardLikeInfo