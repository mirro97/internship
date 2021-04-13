var CCodeInfo = {};
CCodeInfo.getClassObject = function (jsonObject) {

    var codeInfo = {
        idx            : undefined, // field: idx             || type: int             || isNullable: NO
        categoryCode   : undefined, // field: category_code   || type: varchar         || isNullable: NO
        categoryName   : undefined, // field: category_name   || type: varchar         || isNullable: NO
        code           : undefined, // field: code            || type: varchar         || isNullable: NO
        name           : undefined, // field: name            || type: varchar         || isNullable: NO
        description    : undefined, // field: description     || type: varchar         || isNullable: YES
    };

    codeInfo.setData = function (jsonObject) {
        if (jsonObject) {
            var keys = Object.keys(this);
            for (var i = 0 ; i < keys.length ; ++i) {
                var key = keys[i];
                if(jsonObject[key] !== undefined) this[key] = jsonObject[key];
            }
        }
        return this;
    };

    codeInfo.getTableName = function () { return 'code_info'; }
    codeInfo.setData(jsonObject);
    return codeInfo;
}
CCodeInfo.getTableName = function () { return 'code_info'; }
CCodeInfo.equals = function (obj) {
    return obj.getTableName
        ? this.getTableName() === obj.getTableName()
        : false;
}
module.exports = CCodeInfo