module.exports = (sequelize, Sequelize) => {
    const registerModel = require("./register.model");
  
    const Pacotes = sequelize.define("pacote", {
        nome: {
          type: Sequelize.STRING
        },
        valor: {
          type: Sequelize.DECIMAL
        },
        data_inicial: {
          type: Sequelize.DATE
        },
        data_final: {
          type: Sequelize.DATE
        },
        registerId:  {
          type: Sequelize.INTEGER
        }
      });
  
      registerModel.associate = function(models){
          registerModel.belongsTo(models.registerModel, {foreignKey: 'registerId', as: 'register'})    
      };
  
      return Pacotes;
    };