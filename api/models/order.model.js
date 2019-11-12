module.exports = (sequelize, type) => sequelize.define('order', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
     product_name:{
    type:type.STRING
  },
    product_color:{
    type:type.STRING
  },
    product_qty:{
    type:type.NUMBER
  },
      gift_arrangement_lg:{
      type: type.BOOLEAN
   
  },
    gift_arrangement_sm:{
    type: type.BOOLEAN
 
},
    unique_vase:{
    type: type.STRING
  },
      fern: {
      type: type.STRING
  },
  product_total:{
    type:type.NUMBER
  },
    order_id:{
      type: type.STRING,
       allowNull: false
    },
    paymentId:{
      type: type.INTEGER,
      allowNull: true
    }
    
  });

//ORM: Object Relational Mapper
//ODM: Object Document Mapper

