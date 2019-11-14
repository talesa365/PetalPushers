const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bigmoney2019!",
    database: "PetalPusher"
})
module.exports = (app) => {

    app.get('/purchaseOrder/:id', (req, res)=>{
        connection.query(`select * from purchase_order where order_id = ${connection.escape(req.params.id)}`, (err, results)=>{
            res.send(JSON.stringify(results[0]))
        });
    });
}