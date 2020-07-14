module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "estudos2012",
    DB: "aj_trade",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };