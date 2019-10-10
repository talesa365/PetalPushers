const order = require('../sequelize')
module.exports = (app) => {


    app.post('/order', (req, res)=>{
        req.body.id = +req.body.id
        var {first_name, last_name, address,apart,city,state,zip_code,phone,e_mail} = req.body
        order.findOne({where:{
            e_mail: req.body.e_mail
        }}).then(foundOrder=>{
            foundOrder.update({
                first_name:first_name || foundOrder.first_name,
                last_name: last_name || foundOrder.last_name,
                address: address || foundOrder.address,
                apart: apart || foundOrder.apart,
                city: city ||foundOrder.city,
                state: state || foundOrder.state,
                zip_code: zip_code || foundOrder.zip_code,
                phone: phone || foundOrder.phone,
                e_mail: e_mail || foundOrder.e_mail
            }).then(updatedOrder=>{
                console.log(updatedOrder);
                res.send(JSON.stringify(updatedOrder))
            })
        })
    })
}