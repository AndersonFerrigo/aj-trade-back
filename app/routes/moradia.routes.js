module.exports = app => {
    const moradias = require("../controllers/moradia.controller.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", moradias.create);
  
    // Retrieve all Tutorials
    router.get("/", moradias.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", moradias.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", moradias.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", moradias.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", moradias.delete);
  
    // Create a new Tutorial
    router.delete("/", moradias.deleteAll);
  
    app.use('/api/moradias', router);
  };