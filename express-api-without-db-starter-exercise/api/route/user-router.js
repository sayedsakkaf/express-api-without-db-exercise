const express = require('express');
const userController = require('../controller/user-controller');
const router = express.Router


router.get('/', userController.readAll); 
router.get('/', userController.readById); 
router.post('/', userController.create); 
router.delete('/', userController.delete); 
router.put('/', userController.update); 

module.exports = router;