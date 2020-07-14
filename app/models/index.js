const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    
    pool:{
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.registers = require("./register.model.js")(sequelize, Sequelize);
db.contatos = require("./contato.model.js")(sequelize, Sequelize);
db.moradias = require("./moradia.model.js")(sequelize, Sequelize);
db.pacotes = require("./pacotes.model.js")(sequelize, Sequelize);

module.exports = db;
