const express = require('express');
const router = express.Router();
const petController = require('../controllers/pets');

router.route('/')
    .get(petController.getUsersPets)
    .post(petController.createPet);

router.route('/:id')
    .get(petController.getPetById)
    .put('/', petController.editPet)
    .delete('/', petController.deletePet);

router.get('/types', petController.getPetTypes);

module.exports = router;