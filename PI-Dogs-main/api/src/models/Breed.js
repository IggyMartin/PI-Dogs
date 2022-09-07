const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Breed', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    height: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weight: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    yearsOfLife: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
  });
};