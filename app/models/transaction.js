'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: "userId",
      });
      this.belongsTo(models.ticket, {
        foreignKey: "ticketId",
      });
      this.belongsTo(models.payment, {
        foreignKey: "paymentId",
      });
      this.belongsTo(models.typetrip, {
        foreignKey: "tripId",
      });
      this.hasOne(models.history, { foreignKey: "transactionId" });
    }
  }
  transaction.init({
    userId: DataTypes.INTEGER,
    paymentId: DataTypes.INTEGER,
    ticketId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    tripId: DataTypes.INTEGER,
    totalPrice: DataTypes.STRING,
    seatNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};