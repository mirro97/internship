var CSystemConfig = {};
CSystemConfig.getClassObject = function (jsonObject) {

    var systemConfig = {
        idx            : undefined, // field: idx             || type: int             || isNullable: NO
        name           : undefined, // field: name            || type: varchar         || isNullable: NO
        value          : undefined, // field: value           || type: varchar         || isNullable: NO
    };

    systemConfig.setData = function (jsonObject) {
        if (jsonObject) {
            var keys = Object.keys(this);
            for (var i = 0 ; i < keys.length ; ++i) {
                var key = keys[i];
                if(jsonObject[key] !== undefined) this[key] = jsonObject[key];
            }
        }
        return this;
    };

    systemConfig.getTableName = function () { return 'system_config'; }
    systemConfig.setData(jsonObject);
    return systemConfig;
}
CSystemConfig.getTableName = function () { return 'system_config'; }
CSystemConfig.equals = function (obj) {
    return obj.getTableName
        ? this.getTableName() === obj.getTableName()
        : false;
}
module.exports = CSystemConfig