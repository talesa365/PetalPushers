// const Payment = require('../sequelize').payment
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bigmoney2019!",
    database: "PetalPusher"
})
module.exports = (app) => {
    app.get('/payment/:id', (req, res)=>{
        console.log(req.params)
        connection.query(`select * from orders where order_id = ${connection.escape(req.params.id)} and paymentId is null`, (err, results)=>{
            console.log(err, results)
            res.send(JSON.stringify(results[0]))
        })
    })
    app.post('/payment/add', (req, res)=>{
        let order_id = req.body.order_id;
        console.log(req.body);  
        if(order_id !== null){
            connection.query(`insert into payments set ?`, req.body, (err, results)=>{
                console.log(err, "HERE IT IS!", results)
                if(err){
                    console.log(err);
                }else{
                    connection.query(`select * from orders where order_id = ${connection.escape(order_id)} and paymentId is null`, (err, orders)=>{
                        console.log(err, orders)
                        if(err || orders.length < 1){
                            res.send(err || "Please place an order to begin")
                        }
                        connection.query(`update orders set paymentId = ${results.insertId} where id = ${orders[0].id}`, (err, updated)=>{
                            if(err){
                                res.send(JSON.stringify({message:"Please Fill In All Fields"}))
                                console.log(err)
                            }else{
                                res.send(JSON.stringify({message:"Payment Successfully Submitted"}))
                            }
                            console.log(err, updated)
                        })
                    })
                }
            })
        }else{
            res.send(JSON.stringify({message:"Please Place An Order To Begin"}))
        }
    })
  
}

    
    