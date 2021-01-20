const mysql2 = require('mysql2');
const db_con = mysql2.createConnection({
    host:'ra1.anystream.eu',
    user:'cb12ptjs',
    password:'cb12ptjs',
    database:'cb12ptjs',
    port:5420
});

db_con.connect(function(error){
    if(error){
        console.log(error);
    } else {
        console.log('Connected to db.');
    }
})


module.exports = db_con;