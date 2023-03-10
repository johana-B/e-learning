const express = require('express')

const Router = express.Router()
const { authenticateUser, autorizedUser } = require('../middleware/authentication')
const {
    getAllInstractors,
    getSingleInstractor,
    updateInstractor,
    delateInstractor,
    updateinstractorPassword,
    currentInstractor
} = require('../controller/instructorController');

Router
    .route('/')
    .get([authenticateUser, autorizedUser('admin')], getAllInstractors)

Router
    .route('/updateInstractorPassword')
    .patch(authenticateUser, updateinstractorPassword)
Router
    .route('/showMe')
    .get(authenticateUser, currentInstractor)
Router.route('/updateInstractor')
    .patch(authenticateUser, updateInstractor);
Router
    .route('/:id')
    .get([authenticateUser, autorizedUser('admin')], getSingleInstractor)
    .delete(authenticateUser, delateInstractor)

module.exports = Router