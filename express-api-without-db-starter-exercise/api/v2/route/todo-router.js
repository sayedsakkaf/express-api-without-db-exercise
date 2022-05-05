const express = require('express');
const todoController = require('../controller/todo-controller');
const router = express.Router()


router.get('/', todoController.readAll); 
router.get('/:id', todoController.readById); 
router.post('/', todoController.create); 
router.delete('/:id', todoController.delete); 
router.put('/:id', todoController.update); 

module.exports = router;