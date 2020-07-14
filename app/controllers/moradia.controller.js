const db = require("../models");
const Moradia = db.moradias;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
     // Validate request
  if (!req.body.cep) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Contato
  const moradia = {
    cep: req.body.cep,  
    endereco: req.body.endereco,
    numero: req.body.numero,
    complemento: req.body.complemento,
    bairro:req.body.bairro,
    cidade:req.body.cidade,
    estado:req.body.estado,
    pais:req.body.pais,
    registerId:req.body.registerId    
  };

  // Save contato in the database
  Moradia.create(moradia)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Contatos from the database.
exports.findAll = (req, res) => {
    const email = req.query.email;
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;
  
    Contato.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  
};

// Find a single Contato with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Contato.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};

// Update a Contato by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Contato.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Register was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Register with id=${id}. Maybe Register was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Register with id=" + id
        });
      });
};

// Delete a Contato with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Contato.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Register was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Register with id=${id}. Maybe Register was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Register with id=" + id
        });
      });
};

// Delete all Contato from the database.
exports.deleteAll = (req, res) => {
    Contato.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Registers were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all registers."
          });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};