const express = require('express');
const todoController = require('../controller/todo-controller');
const router = express.Router


router.get('/', todoController.readAll); 
router.get('/', todoController.readById); 
router.post('/', todoController.create); 
router.delete('/', todoController.delete); 
router.put('/', todoController.update); 

module.exports = router;