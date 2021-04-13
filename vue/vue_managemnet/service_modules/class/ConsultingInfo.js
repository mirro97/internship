var CConsultingInfo = {};
CConsultingInfo.getClassObject = function (jsonObject) {

    var consultingInfo = {
        idx                        : undefined, // field: idx                         || type: int                         || isNullable: NO
        userIdx                    : undefined, // field: user_idx                    || type: int                         || isNullable: NO
        genderCode                 : undefined, // field: gender_code                 || type: varchar                     || isNullable: NO
        previousExamReadingCount   : undefined, // field: previous_exam_reading_count || type: int                         || isNullable: NO
        mainStudyPlace             : undefined, // field: main_study_place            || type: varchar                     || isNullable: NO
        averageDailyStudyTime      : undefined, // field: average_daily_study_time    || type: int                         || isNullable: NO
        issues                     : undefined, // field: issues                      || type: varchar                     || isNullable: NO
        registerDate               : undefined, // field: register_date               || type: timestamp                   || isNullable: YES
    };

    consultingInfo.setData = function (jsonObject) {
        if (jsonObject) {
            var keys = Object.keys(this);
            for (var i = 0 ; i < keys.length ; ++i) {
                var key = keys[i];
                if(jsonObject[key] !== undefined) this[key] = jsonObject[key];
            }
        }
        return this;
    };

    consultingInfo.getTableName = function () { return 'consulting_info'; }
    consultingInfo.setData(jsonObject);
    return consultingInfo;
}
CConsultingInfo.getTableName = function () { return 'consulting_info'; }
CConsultingInfo.equals = function (obj) {
    return obj.getTableName
        ? this.getTableName() === obj.getTableName()
        : false;
}
module.exports = CConsultingInfo