const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

//verify that user exists in a database 
router.post('/login', UserController.verifyUser, (req, res) => res.status(200).json(res.locals.user))


// Create a user in the database
router.post('/', UserController.createUser, (req, res) =>
  res.status(201).json(res.locals.newUser)
);

// Gets a user from the database
router.get('/:username', UserController.getUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

// Adds a workspace to the user favorites
router.put('/favorites', UserController.addFavorite, (req, res) =>
  res.status(200).json(res.locals.updatedUser)
);

// deletes a workspace from the user favorites
router.delete('/favorites', UserController.deleteFavorite, (req, res) =>
  res.status(200).json(res.locals.updatedUser)
);

// Deletes a user from the database
router.delete('/:user', UserController.deleteUser, (req, res) =>
  res.status(200).json(res.locals.deletedUser)
);
//router.get('/profile/:id')
module.exports = router;
