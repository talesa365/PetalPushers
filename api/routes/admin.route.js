const mysql = require('mysql');

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bigmoney2019!",
    database: "PetalPusher"
})
module.exports = (app) => {
    app.post('/admin', (req, res)=>{
        console.log(req.body);
        
        let admin_id = req.body.admin_id;
        let password = req.body.password;
        
        
        connection.query(`select * from admin where admin_id = ${connection.escape(admin_id)}`, (err, results)=>{
            console.log(results[0].password);
            if(password === results[0].password){
                res.send(JSON.stringify(results[0]))

            }else {
                res.send(JSON.stringify({"err": "password does not match admin password"}))
            }
        });
    });
}

