module.exports = (sequelize, type) => sequelize.define('order', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    calla_lilly:{
      type: type.STRING
    }, 
    color_calla_lilly:{
      type: type.STRING
    },
    gerbera_daisy:{
      type: type.STRING
    }, 
    color_gerbera_daisy:{
      type: type.STRING
    },
    rose:{
      type: type.STRING
    }, 
    color_rose:{
      type: type.STRING
    },
    lilly:{
      type: type.STRING
    }, 
    color_lilly:{
      type: type.STRING
    },
    tulip:{
      type: type.STRING
    }, 
    color_tulip:{
      type: type.STRING
    }, 
    vase_type_round_bouquet:{
      type: type.STRING
    }, 
    vase_type_square_bouquet:{
      type: type.STRING
    }, 
    pot_type_gift_arrangement:{
      type: type.STRING
   
    },
    decor_type_arrangement:{
      type: type.STRING
   
    },
    glazed_type_arrangement:{
      type: type.STRING
   
    },
    glass_type_arrangement:{
      type: type.STRING
   
    },
    gift_arrangement:{
      type: type.STRING
   
    },
    pot_type_fern: {
      type: type.STRING
    },
    fern: {
      type: type.STRING
    }
    
  });

//ORM: Object Relational Mapper
//ODM: Object Document Mapper

