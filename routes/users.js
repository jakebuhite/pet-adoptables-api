const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.route('/')
    .get(userController.getUsers)
    .post(userController.createUser);

router.route('/:id')
    .get(userController.getUserById)
    .put(userController.editUser)
    .delete(userController.deleteUser);

module.exports = router;