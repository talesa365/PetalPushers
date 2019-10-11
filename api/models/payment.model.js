module.exports = (sequelize, type) => sequelize.define('payment', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name:{
      type:type.STRING,
      
    }, 
    last_name:{
      type: type.STRING,
      allowNull: false
    },
    address: {
      type: type.STRING,
      allowNull: false,
    },
    apart: {
      type: type.STRING,
     
    },
    city: {
      type: type.STRING,
  
    },
    state: {
      type: type.STRING,
  
    },
    zip_code: {
      type: type.STRING,
  
    },
    phone: {
      type: type.STRING,
      allowNull: false,
    },
    e_mail: {
      type: type.STRING,
      allowNull: false,
    },
    promo: {
      type: type.STRING,
     
    },
   payment: {
      type: type.STRING,
      allowNull: false,
    },
    resetPasswordToken: type.STRING,
    resetPasswordExpires: type.DATE,
  });
