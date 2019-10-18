const order = require('../sequelize').order
module.exports = (app) => {
    // console.log("Loading");
    //   let order_id = order.order_id

    app.post('/order/add', (req, res) => {
        // console.log(req.body);
        let order_id = req.body.order_id
        order.findOne({
            where: {
                order_id: order_id
            }
        }, function (err, order) {
            if(err){
                console.log(err);
            }
        }).then((foundOrder, err) => {
            console.log("FOUND",foundOrder);
            
            if (foundOrder !== null) {
                foundOrder.update({
                    calla_lilly: req.body["calla-lilly"] || order.calla_lilly,
                    color_calla_lilly: req.body["color-calla-lilly"] || order.color_calla_lilly,
                    gerbera_daisy: req.body["gerbera-daisy"] || order.gerbera_daisy,
                    color_gerbera_daisy: req.body["color-gerbera-daisy"] || order.color_gerbera_daisy,
                    rose: req.body["rose"] || order.rose,
                    color_rose: req.body["color-rose"] || order.color_rose,
                    lilly: req.body["lilly"] || order.lilly,
                    color_lilly: req.body["color-lilly"] || order.color_lilly,
                    tulip: req.body["tulip"] || order.tulip,
                    color_tulip: req.body["color-tulip"] || order.color_lilly,
                    vase_type_round_bouquet: req.body["vase-type-round-bouquet"] || order.vase_type_round_bouquet,
                    vase_type_square_bouquet: req.body["vase-type-square-bouquet"] || order.vase_type_square_bouquet,
                    decor_type_arrangement: req.body["decor-type-arrangement"] || order.decor_type_arrangement,
                    glazed_type_arrangement: req.body["glazed-type-arrangement"] || order.glass_type_arrangement,
                    glass_type_arrangement: req.body["glass-type-arrangement"] || order.glass_type_arrangement,
                    gift_arrangement_qty: req.body["gift-arrangement-qty"] || order.gift_arrangement_qty,
                    pot_type_clay_fern: req.body[" pot-type-clay-fern"] || order.pot_type_clay_fern,
                    pot_type_glazed_fern: req.body[" pot-type-glazed-fern"] || order.pot_type_glazed_fern,
                    pot_type_other_fern: req.body[" pot-type-other-fern"] || order.pot_type_other_fern,
                    fern_qty: req.body["fern-qty"] || order.fern_qty,
                    order_id: req.body.order_id || order.order_id
                }).then(updatedOrder=>{
                    res.send(JSON.stringify(updatedOrder))
                })
                    
                    
            }else{
                // console.log(req.body);
                order.create({
                    calla_lilly: req.body["calla-lilly"],
                    color_calla_lilly: req.body["color-calla-lilly"],
                    gerbera_daisy: req.body["gerbera-daisy"],
                    color_gerbera_daisy: req.body["color-gerbera-daisy"],
                    rose: req.body["rose"],
                    color_rose: req.body["color-rose"],
                    lilly: req.body["lilly"],
                    color_lilly: req.body["color-lilly"],
                    tulip: req.body["tulip"],
                    color_tulip: req.body["color-tulip"],
                    vase_type_round_bouquet: req.body["vase-type-round-bouquet"],
                    vase_type_square_bouquet: req.body["vase-type-square-bouquet"],
                    decor_type_arrangement: req.body["decor-type-arrangement"],
                    glazed_type_arrangement: req.body["glazed-type-arrangement"],
                    glass_type_arrangement: req.body["glass-type-arrangement"],
                    gift_arrangement_qty: req.body["gift-arrangement-qty"],
                    pot_type_clay_fern: req.body[" pot-type-clay-fern"],
                    pot_type_glazed_fern: req.body[" pot-type-glazed-fern"],
                    pot_type_other_fern: req.body[" pot-type-other-fern"],
                    fern_qty: req.body["fern-qty"],
                    order_id: req.body.order_id
                }).then(createdOrder => {
                    console.log("HERE", createdOrder)
                    res.send(JSON.stringify(createdOrder))
                })
            }
        })
    })
}