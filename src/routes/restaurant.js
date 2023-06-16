const express = require('express');
const restaurantController = require('../controller/restaurant.js');
const router = express.Router();

// MEMBUAT DATA
router.post('/', restaurantController.createNewRestaurant);

// AMBIL DATA
router.get('/', restaurantController.getAllRestaurant);

// UPDATE DATA
router.put('/:id', restaurantController.updateRestaurant);

// HAPUS
router.delete('/:id', restaurantController.deleteRestaurant);

module.exports = router;