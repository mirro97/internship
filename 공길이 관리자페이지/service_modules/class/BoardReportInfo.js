var CBoardReportInfo = {};
CBoardReportInfo.getClassObject = function (jsonObject) {

    var boardReportInfo = {
        idx             : undefined, // field: idx              || type: int              || isNullable: NO
        boardIdx        : undefined, // field: board_idx        || type: int              || isNullable: NO
        reportUserIdx   : undefined, // field: report_user_idx  || type: int              || isNullable: NO
        reportTypeCode  : undefined, // field: report_type_code || type: varchar          || isNullable: NO
        contents        : undefined, // field: contents         || type: varchar          || isNullable: YES
        registerDate    : undefined, // field: register_date    || type: timestamp        || isNullable: YES
    };

    boardReportInfo.setData = function (jsonObject) {
        if (jsonObject) {
            var keys = Object.keys(this);
            for (var i = 0 ; i < keys.length ; ++i) {
                var key = keys[i];
                if(jsonObject[key] !== undefined) this[key] = jsonObject[key];
            }
        }
        return this;
    };

    boardReportInfo.getTableName = function () { return 'board_report_info'; }
    boardReportInfo.setData(jsonObject);
    return boardReportInfo;
}
CBoardReportInfo.getTableName = function () { return 'board_report_info'; }
CBoardReportInfo.equals = function (obj) {
    return obj.getTableName
        ? this.getTableName() === obj.getTableName()
        : false;
}
module.exports = CBoardReportInfo