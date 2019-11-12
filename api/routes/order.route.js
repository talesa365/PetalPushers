const order = require('../sequelize').order


module.exports = (app) => {
    // console.log("Loading");
    //   let order_id = order.order_id
    // app.get('/order/:id', (req, res)=>{
    //     console.log(req.params);

    //     order.findOne({where:{order_id:req.params.id}}).then(foundOrder=>{
    //         console.log(foundOrder)
    //         res.send(JSON.stringify(foundOrder))
    //     })
    // })
    app.post('/order/add', (req, res) => {
        // console.log(req.body);
        let order_id = req.body.order_id
        order.findOne({
            where: {
                order_id: order_id
            }, and : {
                paymentId: null
            }
        }, function (err, order) {
            if(err){
                console.log(err);
            }
        }).then((foundOrder, err) => {
            console.log("FOUND",foundOrder);
            if (foundOrder !== null) {
                foundOrder.update({
                    product_name:req.body["product-name"]|| order.product_name,
                    product_color:req.body["product-color"] || order.product_color,
                    product_qty:req.body["product-qty"] || order.product_qty,
                    gift_arrangement_lg: req.body["gift-arrangement-lg"] || order.gift_arrangement_lg,
                    gift_arrangement_sm: req.body["gift-arrangement-sm"] || order.gift_arrangement_sm,
                    unique_vase:req.body["unique-vase"] || order.unique_vase,
                    fern: req.body["fern"] || order.fern_qty,
                    product_total:req.body["product-total"] || order.product_total,
                    order_id: req.body.order_id || order.order_id
                }).then(updatedOrder=>{
                    res.send(JSON.stringify(updatedOrder))
                })   
            }else{
                // console.log(req.body);
                order.create({
                    product_name:req.body["product-name"]|| order.product_name,
                    product_color:req.body["product-color"] || order.product_color,
                    product_qty:req.body["product-qty"] || order.product_qty,
                    gift_arrangement_lg: req.body["gift-arrangement-lg"] || order.gift_arrangement_lg,
                    gift_arrangement_sm: req.body["gift-arrangement-sm"] || order.gift_arrangement_sm,
                    unique_vase:req.body["unique-vase"] || order.unique_vase,
                    fern: req.body["fern"] || order.fern_qty,
                    product_total:req.body["product-total"] || order.product_total,
                    order_id: req.body.order_id || order.order_id
                }).then(createdOrder => {
                    console.log("HERE", createdOrder)
                    res.send(JSON.stringify(createdOrder))
                })
            }
        })
    })
}
