const Payment = require('../sequelize').payment
module.exports = (app) => {



    app.post('/payment/add', (req, res) => {
        // console.log(req.body);
        let order_id = req.body.order_id
        // req.body.id = +req.body.id
       
        Payment.findOne({
            where: {
                order_id: order_id
            }
        }, function (err, order) {
            if(err){
                console.log(err);
            }
        }).then((foundPayment, err) => {
            console.log("FOUND",foundPayment);
            
            if (foundPayment !== null) {
                foundPayment.update({
                    first_name:req.body.first_name || foundPayment.first_name,
                    last_name: req.body.last_name || foundPayment.last_name,
                    address: req.body.address || foundPayment.address,
                    apart: req.body.apart || foundPayment.apart,
                    city: req.body.city ||foundPayment.city,
                    state: req.body.state || foundPayment.state,
                    zip_code: req.body.zip_code || foundPayment.zip_code,
                    phone: req.body.phone || foundPayment.phone,
                    e_mail: req.body.e_mail || foundPayment.e_mail,
                    promo: req.body.promo || foundPayment.promo,
                    payment: req.body.payment || foundPayment.payment,
                    order_id: req.body.order_id || foundPayment.order_id
                }).then(updatedPayment => {
                    let x = JSON.stringify(updatedPayment)
                    console.log(x);
                    
                    res.send(x)

                })
                
            }else{
                console.log(req.body);
                Payment.create({
                    first_name:req.body.first_name,
                    last_name: req.body.last_name,
                    address: req.body.address, 
                    apart: req.body.apart, 
                    city: req.body.city, 
                    state: req.body.state, 
                    zip_code: req.body.zip_code, 
                    phone: req.body.phone, 
                    e_mail: req.body.e_mail ,
                    promo: req.body.promo, 
                    payment: req.body.payment, 
                    order_id: req.body.order_id 
                }).then(createdPayment => {
                    console.log("HERE", createdPayment)
                    let x = JSON.stringify(createdPayment)
                    console.log(x);
                    
                    res.send(JSON.stringify(createdPayment))
                })
            }
        })
    })
}

    
    