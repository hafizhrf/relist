var name = 'postgres';
var pass = 'Aditia12345';
var host = 'localhost:5432';
var db = 'relist';

var connect = 'postgres://' + name + ':' + pass + '@' + host + '/' + db;

module.exports = connect;