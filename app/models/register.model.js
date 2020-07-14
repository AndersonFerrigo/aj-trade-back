module.exports = (sequelize, Sequelize) => {
    const Register = sequelize.define("register", {
      user: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      conf_email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      reference_link: {
        type: Sequelize.STRING
      }
    });
  
    return Register;
  };