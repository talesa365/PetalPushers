module.exports = (sequelize, type) => sequelize.define('admin', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
   
    employee_Id:{
        type: type.STRING,
        allowNull: false
      },
    employee_password: {
      type: type.STRING,
      allowNull: false,
    },
    resetPasswordToken: type.STRING,
    resetPasswordExpires: type.DATE,
  });
