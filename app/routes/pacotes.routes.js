module.exports = app => {
    const pacotes = require("../controllers/pacotes.controller.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", pacotes.create);
  
    // Retrieve all Tutorials
    router.get("/", pacotes.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", pacotes.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", pacotes.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", pacotes.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", pacotes.delete);
  
    // Create a new Tutorial
    router.delete("/", pacotes.deleteAll);
  
    app.use('/api/pacotes', router);
  };