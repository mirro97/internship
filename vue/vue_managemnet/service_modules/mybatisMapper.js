var fs = require('fs');

var mybatisMapper = require('mybatis-mapper');

var mapper = {}
var timerMybatisLoad = null;

mapper.initMybatisMapper = function (_mapperPath) {
    var mapperPath = '/mybatis-mapper';
    mapperPath = _mapperPath || mapperPath;

    fs.watch(__dirname + mapperPath, {recursive: true}, function (event, filename) {
        if (timerMybatisLoad == null) {
            timerMybatisLoad = setTimeout(reloadMapper, 1000, mapperPath);
        } else {
            clearTimeout(timerMybatisLoad);
            timerMybatisLoad = setTimeout(reloadMapper, 1000, mapperPath);
        }
    });
    reloadMapper(mapperPath);

    return mybatisMapper;
}

function getXmlList(xmlPath){
    var xmlList = [];
    try{
        var basePath = __dirname + xmlPath;
        var fileList = fs.readdirSync(basePath, { withFileTypes: true });
        for (var i = 0; i < fileList.length; ++i) {
            if (fileList[i].name.endsWith('.xml')) {
                xmlList.push(basePath + '/' + fileList[i].name);
            }
        }
    } catch(e){
        console.error('base read error');
    }
    return xmlList;
}

function reloadMapper(mapperPath) {
    try {
        var xmlList = getXmlList(mapperPath);
        mybatisMapper.createMapper(xmlList);
        console.info('mapper reloaded');
    } catch (e) {
        console.error('Mapper read error', e);
    }
}
module.exports = mapper.initMybatisMapper;