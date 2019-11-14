const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bigmoney2019!",
    database: "PetalPusher"
})
module.exports = (app) => {

    app.get('/purchaseOrder/:id', (req, res)=>{
        connection.query(`select * from orders where order_id = ${connection.escape(orders)}`, (err, results)=>{
            res.send(JSON.stringify(results[0]))
        });
    });
}