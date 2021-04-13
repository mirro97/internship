var CStudyGroupInfo = {};
CStudyGroupInfo.getClassObject = function (jsonObject) {

    var studyGroupInfo = {
        idx                    : undefined, // field: idx                     || type: int                     || isNullable: NO
        userIdx                : undefined, // field: user_idx                || type: int                     || isNullable: NO
        seriesCode             : undefined, // field: series_code             || type: varchar                 || isNullable: NO
        dailyStudyPeriodCode   : undefined, // field: daily_study_period_code || type: varchar                 || isNullable: NO
        openTypeCode           : undefined, // field: open_type_code          || type: varchar                 || isNullable: NO
        password               : undefined, // field: password                || type: varchar                 || isNullable: YES
        title                  : undefined, // field: title                   || type: varchar                 || isNullable: NO
        introduction           : undefined, // field: introduction            || type: varchar                 || isNullable: NO
        chatRoomIdx            : undefined, // field: chat_room_idx           || type: int                     || isNullable: YES
        registerDate           : undefined, // field: register_date           || type: timestamp               || isNullable: YES
    };

    studyGroupInfo.setData = function (jsonObject) {
        if (jsonObject) {
            var keys = Object.keys(this);
            for (var i = 0 ; i < keys.length ; ++i) {
                var key = keys[i];
                if(jsonObject[key] !== undefined) this[key] = jsonObject[key];
            }
        }
        return this;
    };

    studyGroupInfo.getTableName = function () { return 'study_group_info'; }
    studyGroupInfo.setData(jsonObject);
    return studyGroupInfo;
}
CStudyGroupInfo.getTableName = function () { return 'study_group_info'; }
CStudyGroupInfo.equals = function (obj) {
    return obj.getTableName
        ? this.getTableName() === obj.getTableName()
        : false;
}
module.exports = CStudyGroupInfo