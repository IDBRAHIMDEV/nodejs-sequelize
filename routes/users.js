const express = require('express');
const UserController = require('./../controllers/UserController');

const router = express.Router();

//router.get('/create', UserController.createUser);
router.get('', UserController.getAllUsers);
router.post('', UserController.storeUser);
router.post('/:id', UserController.updateUser);
//router.get('/:id/edit', UserController.editUser)
router.get('/:id', UserController.showOneUser)
router.post('/:id/delete', UserController.deleteUser)

module.exports = router;