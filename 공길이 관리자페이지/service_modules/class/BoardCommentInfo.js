var CBoardCommentInfo = {};
CBoardCommentInfo.getClassObject = function (jsonObject) {

    var boardCommentInfo = {
        idx            : undefined, // field: idx             || type: int             || isNullable: NO
        boardIdx       : undefined, // field: board_idx       || type: int             || isNullable: NO
        parentIdx      : undefined, // field: parent_idx      || type: int             || isNullable: YES
        userIdx        : undefined, // field: user_idx        || type: int             || isNullable: NO
        contents       : undefined, // field: contents        || type: varchar         || isNullable: NO
        registerDate   : undefined, // field: register_date   || type: timestamp       || isNullable: YES
    };

    boardCommentInfo.setData = function (jsonObject) {
        if (jsonObject) {
            var keys = Object.keys(this);
            for (var i = 0 ; i < keys.length ; ++i) {
                var key = keys[i];
                if(jsonObject[key] !== undefined) this[key] = jsonObject[key];
            }
        }
        return this;
    };

    boardCommentInfo.getTableName = function () { return 'board_comment_info'; }
    boardCommentInfo.setData(jsonObject);
    return boardCommentInfo;
}
CBoardCommentInfo.getTableName = function () { return 'board_comment_info'; }
CBoardCommentInfo.equals = function (obj) {
    return obj.getTableName
        ? this.getTableName() === obj.getTableName()
        : false;
}
module.exports = CBoardCommentInfo