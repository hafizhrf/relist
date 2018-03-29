var name = 'postgres';
var pass = 'yuihirasawa';
var host = 'localhost:5432';
var db = 'relist';

var connect = 'postgres://' + name + ':' + pass + '@' + host + '/' + db;

module.exports = connect;