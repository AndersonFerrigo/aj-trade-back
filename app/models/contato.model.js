module.exports = (sequelize, Sequelize) => {
  const registerModel = require("./register.model");

  const Contato = sequelize.define("contato", {
      nome: {
        type: Sequelize.STRING
      },
      sobrenome: {
        type: Sequelize.STRING
      },
      usuario: {
        type: Sequelize.STRING
      },
      idade: {
        type: Sequelize.INTEGER
      },
      sexo: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      tipoDocumento: {
        type: Sequelize.STRING
      },
      numeroDocumento: {
        type: Sequelize.STRING
      },
      registerId:  {
        type: Sequelize.INTEGER
      }
    });

    registerModel.associate = function(models){
        registerModel.belongsTo(models.registerModel, {foreignKey: 'registerId', as: 'register'})    
    };

    return Contato;
  };