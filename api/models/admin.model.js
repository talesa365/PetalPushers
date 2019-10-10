module.exports = (sequelize, type) => sequelize.define('employee', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
   
    employee_id:{
        type: type.STRING,
        allowNull: false
      },
    password: {
      type: type.STRING,
      allowNull: false,
    },
    resetPasswordToken: type.STRING,
    resetPasswordExpires: type.DATE,
  });
