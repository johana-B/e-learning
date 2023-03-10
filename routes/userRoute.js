const express = require('express');

const router = express.Router();

const { authenticateUser, autorizedUser } = require('../middleware/authentication')

const { getAllUsers,
    getCurrentUser,
    getSingleUser,
    updateUser,
    updateUserPassword,
    deleteUser
} = require('../controller/userController');

router.route('/').get(authenticateUser, autorizedUser('admin'), getAllUsers);

router.route('/showCurrentUser').get(authenticateUser, getCurrentUser);
router.route('/updateUser').patch(authenticateUser, updateUser);
router.route('/updateUserPassword').patch(authenticateUser, updateUserPassword);

router.route('/:id')
    .get(authenticateUser, autorizedUser('admin'), getSingleUser)
    .delete(authenticateUser, deleteUser);

module.exports = router;