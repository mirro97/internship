var CUserInfo = {};
CUserInfo.getClassObject = function (jsonObject) {

    var userInfo = {
        idx               : undefined, // field: idx                || type: int                || isNullable: NO
        id                : undefined, // field: id                 || type: varchar            || isNullable: YES
        password          : undefined, // field: password           || type: varchar            || isNullable: YES
        email             : undefined, // field: email              || type: varchar            || isNullable: NO
        name              : undefined, // field: name               || type: varchar            || isNullable: NO
        kakaoId           : undefined, // field: kakao_id           || type: varchar            || isNullable: YES
        nickname          : undefined, // field: nickname           || type: varchar            || isNullable: NO
        city              : undefined, // field: city               || type: varchar            || isNullable: NO
        seriesCode        : undefined, // field: series_code        || type: varchar            || isNullable: NO
        studyPeriodCode   : undefined, // field: study_period_code  || type: varchar            || isNullable: NO
        profileImageName  : undefined, // field: profile_image_name || type: varchar            || isNullable: YES
        birthday          : undefined, // field: birthday           || type: timestamp          || isNullable: NO
        registerDate      : undefined, // field: register_date      || type: timestamp          || isNullable: YES
    };

    userInfo.setData = function (jsonObject) {
        if (jsonObject) {
            var keys = Object.keys(this);
            for (var i = 0 ; i < keys.length ; ++i) {
                var key = keys[i];
                if(jsonObject[key] !== undefined) this[key] = jsonObject[key];
            }
        }
        return this;
    };

    userInfo.getTableName = function () { return 'user_info'; }
    userInfo.setData(jsonObject);
    return userInfo;
}
CUserInfo.getTableName = function () { return 'user_info'; }
CUserInfo.equals = function (obj) {
    return obj.getTableName
        ? this.getTableName() === obj.getTableName()
        : false;
}
module.exports = CUserInfo