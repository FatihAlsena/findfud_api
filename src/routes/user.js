const express = require('express');
const userController = require('../controller/user.js');
const router = express.Router();

// MEMBUAT DATA
router.post('/', userController.createNewUser);

// AMBIL DATA
router.get('/', userController.getAllUsers);

// UPDATE DATA
router.put('/:id', userController.updateUser);

// HAPUS
router.delete('/:id', userController.deleteUser);

module.exports = router;