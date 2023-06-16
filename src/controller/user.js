const usersModel = require('../models/account');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await usersModel.getAllUsers();

        res.json({
            message: 'Get all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error,
        })
    }
}

const createNewUser = async (req, res) => {
    const {
        body
    } = req;

    if (!body.email || !body.username || !body.email || !body.password || !body.number || !body.address) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null
        })
    }

    try {
        await usersModel.createNewUser(body);
        res.status(201).json({
            message: 'Create new user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error,
        })
    }
}

const updateUser = async (req, res) => {
    const {
        id
    } = req.params;

    const {
        body
    } = req;

    try {
        await usersModel.updateUser(body, id);
        res.status(201).json({
            message: 'Update user success',
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

const deleteUser = async (req, res) => {
    const {
        id
    } = req.params;

    try {
        await usersModel.deleteUser(id);
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
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}