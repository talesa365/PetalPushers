// The first step of the process is to establish a connection with the database.
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bigmoney2019!",
    database: "PetalPusher"
})

module.exports = (app) => {
    app.get('/order/:id', (req, res)=>{
        connection.query(`select * from orders where order_id = ${connection.escape(req.params.id)}`, (err, results)=>{
            res.send(JSON.stringify(results[0]))
        });
    });
  
    app.post('/order/add', (req, res)=>{
        console.log(req.body);
        const {order_id, order, balance} = req.body
        let orderBalance = balance;
        
        console.log("this is b",orderBalance);
        
        // let order_id = req.body.order_id
        connection.query(`select * from orders where order_id = `+ connection.escape(order_id) + ` and paymentId is null`, (err, results)=>{
            console.log(err, results);
            if(results.length > 0){
                connection.query(`update orders set bouquet = ${connection.escape(JSON.stringify(order))} where order_id = ${connection.escape(order_id)}` )
            }else{
                let vals = {
                    order_id: order_id,
                    bouquet: JSON.stringify(order),
                    balance: orderBalance
                }
                connection.query(`insert into orders set ?`, vals, (err, results)=>{
                    
                })
            }
        })
    })
   
}
