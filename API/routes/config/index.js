var name = 'postgres';
var pass = 'saico_87';
var host = 'localhost:5432';
var db = 'relist';

var connect = 'postgres://' + name + ':' + pass + '@' + host + '/' + db;

module.exports = connect;