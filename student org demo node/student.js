var fs = require('fs');
var dbPath = './db.json';
exports.find = function(callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return (callback(err));
        }
        callback(null, JSON.parse(data));
    });
};
exports.save = function(student, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err);
        }
        var datas = JSON.parse(data).datas;
        student.id = datas[datas.length - 1].id + 1;
        datas.push(student);
        var fileDate = JSON.stringify({
            datas: datas
        });
        fs.writeFile(dbPath, fileDate, function(err) {
            if (err) {
                return callback(err);
            }
            callback(null);
        });
    });
};
exports.findById = function(id, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err);
        }
        var datas = JSON.parse(data).datas;
        var result = datas.find(function(item) {
            return item.id === parseInt(id);
        });
        callback(null, result);
    });
};
exports.update = function(student, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err);
        }
        student.id = parseInt(student.id);
        var datas = JSON.parse(data).datas;
        // console.log(datas);
        var result = datas.find(function(item) {
            return item.id === student.id;
        });
        console.log(result);
        for (var key in student) {
            result[key] = student[key];
            // console.log(key);
        }
        // console.log(result);
        var fileDate = JSON.stringify({ datas: datas });

        fs.writeFile(dbPath, fileDate, function(err) {
            if (err) {
                return callback(err);
            }
            callback(null);
        });

    });
};

exports.delete = function(student, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            callback(err);
        }
        student.id = parseInt(student.id);
        var datas = JSON.parse(data).datas;
        var ret = datas.findIndex(function(item) {
            return item.id === student.id;
        });
        datas.splice(ret, 1);
        var fileDate = JSON.stringify({ datas: datas });
        fs.writeFile(dbPath, fileDate, function(err) {
            if (err) {
                callback(err);
            }
            return callback(null);
        });
    });
};