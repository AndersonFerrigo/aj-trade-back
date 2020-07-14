module.exports = app => {
    const contatos = require("../controllers/contato.controller.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", contatos.create);
  
    // Retrieve all Tutorials
    router.get("/", contatos.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", contatos.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", contatos.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", contatos.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", contatos.delete);
  
    // Create a new Tutorial
    router.delete("/", contatos.deleteAll);
  
    app.use('/api/contatos', router);
  };