var CStudySubjectTime = {};
CStudySubjectTime.getClassObject = function (jsonObject) {

    var studySubjectTime = {
        idx              : undefined, // field: idx               || type: int               || isNullable: NO
        studySubjectIdx  : undefined, // field: study_subject_idx || type: int               || isNullable: NO
        startTime        : undefined, // field: start_time        || type: datetime          || isNullable: NO
        endTime          : undefined, // field: end_time          || type: datetime          || isNullable: NO
        registerDate     : undefined, // field: register_date     || type: datetime          || isNullable: YES
    };

    studySubjectTime.setData = function (jsonObject) {
        if (jsonObject) {
            var keys = Object.keys(this);
            for (var i = 0 ; i < keys.length ; ++i) {
                var key = keys[i];
                if(jsonObject[key] !== undefined) this[key] = jsonObject[key];
            }
        }
        return this;
    };

    studySubjectTime.getTableName = function () { return 'study_subject_time'; }
    studySubjectTime.setData(jsonObject);
    return studySubjectTime;
}
CStudySubjectTime.getTableName = function () { return 'study_subject_time'; }
CStudySubjectTime.equals = function (obj) {
    return obj.getTableName
        ? this.getTableName() === obj.getTableName()
        : false;
}
module.exports = CStudySubjectTime