var CStudyGroupUser = {};
CStudyGroupUser.getClassObject = function (jsonObject) {

    var studyGroupUser = {
        studyGroupIdx  : undefined, // field: study_group_idx || type: int             || isNullable: NO
        userIdx        : undefined, // field: user_idx        || type: int             || isNullable: NO
        registerDate   : undefined, // field: register_date   || type: timestamp       || isNullable: YES
    };

    studyGroupUser.setData = function (jsonObject) {
        if (jsonObject) {
            var keys = Object.keys(this);
            for (var i = 0 ; i < keys.length ; ++i) {
                var key = keys[i];
                if(jsonObject[key] !== undefined) this[key] = jsonObject[key];
            }
        }
        return this;
    };

    studyGroupUser.getTableName = function () { return 'study_group_user'; }
    studyGroupUser.setData(jsonObject);
    return studyGroupUser;
}
CStudyGroupUser.getTableName = function () { return 'study_group_user'; }
CStudyGroupUser.equals = function (obj) {
    return obj.getTableName
        ? this.getTableName() === obj.getTableName()
        : false;
}
module.exports = CStudyGroupUser