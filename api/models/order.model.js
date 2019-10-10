module.exports = (sequelize, type) => sequelize.define('user', {
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
    phone: {
      type: type.STRING,
      allowNull: false,
    },
    resetPasswordToken: type.STRING,
    resetPasswordExpires: type.DATE,
  });
