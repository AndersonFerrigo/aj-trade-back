module.exports = app => {
    const registers = require("../controllers/register.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", registers.create);
  
    // Retrieve all Tutorials
    router.get("/", registers.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", registers.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", registers.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", registers.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", registers.delete);
  
    // Create a new Tutorial
    router.delete("/", registers.deleteAll);
  
    app.use('/api/registers', router);
  };