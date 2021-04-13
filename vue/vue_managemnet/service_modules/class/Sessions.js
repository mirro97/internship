var CSessions = {};
CSessions.getClassObject = function (jsonObject) {

    var sessions = {
        sessionId      : undefined, // field: session_id      || type: varchar         || isNullable: NO
        expires        : undefined, // field: expires         || type: int             || isNullable: NO
        data           : undefined, // field: data            || type: mediumtext      || isNullable: YES
    };

    sessions.setData = function (jsonObject) {
        if (jsonObject) {
            var keys = Object.keys(this);
            for (var i = 0 ; i < keys.length ; ++i) {
                var key = keys[i];
                if(jsonObject[key] !== undefined) this[key] = jsonObject[key];
            }
        }
        return this;
    };

    sessions.getTableName = function () { return 'sessions'; }
    sessions.setData(jsonObject);
    return sessions;
}
CSessions.getTableName = function () { return 'sessions'; }
CSessions.equals = function (obj) {
    return obj.getTableName
        ? this.getTableName() === obj.getTableName()
        : false;
}
module.exports = CSessions