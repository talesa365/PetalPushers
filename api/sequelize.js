const Sequelize = require('sequelize')
const UserModel = require('./models/order.model')
const EmployeeModel = require('./models/admin.model')
const sequelize = new Sequelize('PetalPusher','root','Bigmoney2019!', {
  host: '127.0.0.1',
  dialect: 'mysql',

})

const User = UserModel(sequelize, Sequelize);
const Employee = EmployeeModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  // eslint-disable-next-line no-console
  console.log('Users db and user table have been created');
});

module.exports = User;
module.exports = Employee;
