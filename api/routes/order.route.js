const order = require('../sequelize')
module.exports = (app) => {
    console.log("Loading");
    

    app.post('/order/add', (req, res)=>{
        console.log(req.body);
if(order){
    order.create({
        calla_lilly: req["calla-lilly"],
        color_calla_lilly: req["color-calla-lilly"],
        gerbera_daisy:req["gerbera-daisy"],
        color_gerbera_daisy:req["color-gerbera-daisy"],
        rose: req["rose"],
        color_rose: req["color-rose"],
        lilly: req["lilly"],
        color_lilly: req["color-lilly"],
        tulip: req["tulip"],
        color_tulip: req["color-tulip"],
        vase_type_round_bouquet:req["vase-type-round-bouquet"],
        vase_type_square_bouquet:req["vase-type-square-bouquet"],
        decor_type_arrangement: req["decor-type-arrangement"],
        glazed_type_arrangement:req["glazed-type-arrangement"],
        glass_type_arrangement:req["glass-type-arrangement"],

    })
}
        
        res.send(JSON.stringify({"message":"Hello"}))
        
        
    })
}