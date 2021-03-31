var CConsultingSubjectScore = {};
CConsultingSubjectScore.getClassObject = function (jsonObject) {

    var consultingSubjectScore = {
        consultingIdx  : undefined, // field: consulting_idx  || type: int             || isNullable: NO
        subjectName    : undefined, // field: subject_name    || type: varchar         || isNullable: NO
        subjectColor   : undefined, // field: subject_color   || type: varchar         || isNullable: NO
        subjectScore   : undefined, // field: subject_score   || type: varchar         || isNullable: NO
    };

    consultingSubjectScore.setData = function (jsonObject) {
        if (jsonObject) {
            var keys = Object.keys(this);
            for (var i = 0 ; i < keys.length ; ++i) {
                var key = keys[i];
                if(jsonObject[key] !== undefined) this[key] = jsonObject[key];
            }
        }
        return this;
    };

    consultingSubjectScore.getTableName = function () { return 'consulting_subject_score'; }
    consultingSubjectScore.setData(jsonObject);
    return consultingSubjectScore;
}
CConsultingSubjectScore.getTableName = function () { return 'consulting_subject_score'; }
CConsultingSubjectScore.equals = function (obj) {
    return obj.getTableName
        ? this.getTableName() === obj.getTableName()
        : false;
}
module.exports = CConsultingSubjectScore