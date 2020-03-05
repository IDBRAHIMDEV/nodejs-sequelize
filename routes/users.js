const express = require('express');
const UserController = require('./../controllers/UserController');

const router = express.Router();

router.get('/users/create', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.storeUser);
router.post('/users/:id', UserController.updateUser);
router.get('/users/:id/edit', UserController.editUser)
router.get('/users/:id', UserController.showOneUser)
router.post('/users/:id/delete', UserController.deleteUser)

module.exports = router;