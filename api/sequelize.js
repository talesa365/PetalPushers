const Sequelize = require('sequelize')
const OrderModel = require('./models/order.model')
const PaymentModel = require('./models/payment.model')
const AdminModel = require('./models/admin.model')
const sequelize = new Sequelize('PetalPusher','root','Bigmoney2019!', {
  host: '127.0.0.1',
  dialect: 'mysql',

})

const Order = OrderModel(sequelize, Sequelize);
const Payment = PaymentModel(sequelize, Sequelize);
const Admin = AdminModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  // eslint-disable-next-line no-console
  console.log('Users db and user table have been created');
});

module.exports = Order;
module.exports = Payment;
module.exports = Admin;
