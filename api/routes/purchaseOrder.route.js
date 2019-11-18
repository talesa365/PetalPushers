const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bigmoney2019!",
    database: "PetalPusher"
})
module.exports = (app) => {

    app.get('/purchaseOrder', (req, res)=>{
        connection.query(`select * from orders `, (err, results)=>{
            
            res.send(JSON.stringify(results))
            console.log(results);
        });
     
    });
}
   