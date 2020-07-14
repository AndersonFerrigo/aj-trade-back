module.exports = (sequelize, Sequelize) => {
    const registerModel = require("./register.model");
  
    const Moradia = sequelize.define("moradia", {
        cep: {
          type: Sequelize.INTEGER
        },
        endereco: {
          type: Sequelize.STRING
        },
        numero: {
          type: Sequelize.INTEGER
        },
        complemento: {
          type: Sequelize.STRING
        },
        bairro: {
          type: Sequelize.STRING
        },
        cidade: {
          type: Sequelize.STRING
        },
        estado: {
          type: Sequelize.STRING
        },
        pais: {
          type: Sequelize.STRING
        },
        registerId:  {
          type: Sequelize.INTEGER
        }
      });
  
      registerModel.associate = function(models){
          registerModel.belongsTo(models.registerModel, {foreignKey: 'registerId', as: 'register'})    
      };
  
      return Moradia;
    };