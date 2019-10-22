module.exports = (sequelize, type) => sequelize.define('purchasingOrder', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
   
   last_name:{
        type: type.STRING,
        allowNull: false
      },
   e_mail: {
      type: type.STRING,
      allowNull: false,
    },
   order: {
        type: type.STRING,
        allowNull: false,
      },
      
    resetPasswordToken: type.STRING,
    resetPasswordExpires: type.DATE,
  });
