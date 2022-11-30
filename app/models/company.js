'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ticket, { foreignKey: "companyId" });

    }
  }
  company.init({
    companyName: DataTypes.STRING,
    companyImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'company',
  });
  return company;
};