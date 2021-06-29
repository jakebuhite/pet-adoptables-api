const express = require('express');
const router = express.Router();
const petController = require('../controllers/pets');

router.get('/', petController.getUsersPets);

router.get('/:id', petController.getPetById);

router.get('/types', petController.getPetTypes);

module.exports = router;