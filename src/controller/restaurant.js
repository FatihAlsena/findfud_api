const restaurantModel = require('../models/restaurant');

const getAllRestaurant = async (req, res) => {
    try {
        const [data] = await restaurantModel.getAllRestaurant();

        res.json({
            message: 'Get all restaurant success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error,
        })
    }
}

const createNewRestaurant = async (req, res) => {
    const {
        body
    } = req;

    if (!body.name || !body.address || !body.phone_number) {
        return res.status(400).json({
            message: 'Submitted the wrong data',
            data: null
        })
    }

    try {
        await restaurantModel.createNewRestaurant(body);
        res.status(201).json({
            message: 'Create new restaurant success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error,
        })
    }
}

const updateRestaurant = async (req, res) => {
    const {
        id
    } = req.params;

    const {
        body
    } = req;

    try {
        await restaurantModel.updateRestaurant(body, id);
        res.status(201).json({
            message: 'Update restaurant success',
            data: {
                id: id,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error,
        })
    }
}

const deleteRestaurant = async (req, res) => {
    const {
        id
    } = req.params;

    try {
        await restaurantModel.deleteRestaurant(id);
        res.json({
            message: 'User has deleted',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllRestaurant,
    createNewRestaurant,
    updateRestaurant,
    deleteRestaurant
}