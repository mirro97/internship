var CStudySubjectInfo = {};
CStudySubjectInfo.getClassObject = function (jsonObject) {

    var studySubjectInfo = {
        idx            : undefined, // field: idx             || type: int             || isNullable: NO
        userIdx        : undefined, // field: user_idx        || type: int             || isNullable: NO
        subjectName    : undefined, // field: subject_name    || type: varchar         || isNullable: NO
        subjectColor   : undefined, // field: subject_color   || type: varchar         || isNullable: NO
        registerDate   : undefined, // field: register_date   || type: timestamp       || isNullable: YES
    };

    studySubjectInfo.setData = function (jsonObject) {
        if (jsonObject) {
            var keys = Object.keys(this);
            for (var i = 0 ; i < keys.length ; ++i) {
                var key = keys[i];
                if(jsonObject[key] !== undefined) this[key] = jsonObject[key];
            }
        }
        return this;
    };

    studySubjectInfo.getTableName = function () { return 'study_subject_info'; }
    studySubjectInfo.setData(jsonObject);
    return studySubjectInfo;
}
CStudySubjectInfo.getTableName = function () { return 'study_subject_info'; }
CStudySubjectInfo.equals = function (obj) {
    return obj.getTableName
        ? this.getTableName() === obj.getTableName()
        : false;
}
module.exports = CStudySubjectInfo