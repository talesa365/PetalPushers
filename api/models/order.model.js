module.exports = (sequelize, type) => sequelize.define('order', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bouquet:{
      type:type.STRING,
      
    }, 
    gift_arrangement:{
      type: type.STRING,
   
    },
    fern: {
      type: type.STRING
    }
    
  });
