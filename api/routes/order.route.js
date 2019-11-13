// const order = require('../sequelize').order
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
        const {order_id, order} = req.body
        // let order_id = req.body.order_id
        connection.query(`select * from orders where order_id = `+ connection.escape(order_id) + ` and paymentId is null`, (err, results)=>{
            console.log(err, results);
            if(results.length > 0){
                connection.query(`update orders set bouquet = ${connection.escape(JSON.stringify(order))} where order_id = ${connection.escape(order_id)}` )
            }else{
                let vals = {
                    order_id: order_id,
                    bouquet: JSON.stringify(order)
                }
                connection.query(`insert into orders set ?`, vals, (err, results)=>{
                    // console.log(err, results);
                    
                })
            }
        })
    })
    // app.post('/order/add', (req, res) => {
    //     // console.log(req.body);
    //     order.findOne({
    //         where: {
    //             order_id: order_id
    //         }, and : {
    //             paymentId: null
    //         }
    //     }, function (err, order) {
    //         if(err){
    //             console.log(err);
    //         }
    //     }).then((foundOrder, err) => {
    //         console.log("FOUND",foundOrder);
    //         if (foundOrder !== null) {
    //             foundOrder.update({
    //                 product_name:req.body["product-name"]|| order.product_name,
    //                 product_color:req.body["product-color"] || order.product_color,
    //                 product_qty:req.body["product-qty"] || order.product_qty,
    //                 gift_arrangement_lg: req.body["gift-arrangement-lg"] || order.gift_arrangement_lg,
    //                 gift_arrangement_sm: req.body["gift-arrangement-sm"] || order.gift_arrangement_sm,
    //                 unique_vase:req.body["unique-vase"] || order.unique_vase,
    //                 fern: req.body["fern"] || order.fern_qty,
    //                 product_total:req.body["product-total"] || order.product_total,
    //                 order_id: req.body.order_id || order.order_id
    //             }).then(updatedOrder=>{
    //                 res.send(JSON.stringify(updatedOrder))
    //             })   
    //         }else{
    //             // console.log(req.body);
    //             order.create({
    //                 product_name:req.body["product-name"]|| order.product_name,
    //                 product_color:req.body["product-color"] || order.product_color,
    //                 product_qty:req.body["product-qty"] || order.product_qty,
    //                 gift_arrangement_lg: req.body["gift-arrangement-lg"] || order.gift_arrangement_lg,
    //                 gift_arrangement_sm: req.body["gift-arrangement-sm"] || order.gift_arrangement_sm,
    //                 unique_vase:req.body["unique-vase"] || order.unique_vase,
    //                 fern: req.body["fern"] || order.fern_qty,
    //                 product_total:req.body["product-total"] || order.product_total,
    //                 order_id: req.body.order_id || order.order_id
    //             }).then(createdOrder => {
    //                 console.log("HERE", createdOrder)
    //                 res.send(JSON.stringify(createdOrder))
    //             })
    //         }
    //     })
    // })
}
