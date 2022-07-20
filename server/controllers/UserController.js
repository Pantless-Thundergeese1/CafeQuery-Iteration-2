const { request } = require('express');
const { User } = require('../models/dbModels');
const bcrypt = require('bcryptjs');

const UserController = {

  // Create a new user in the database
  // information will be sent in the request body
  async createUser(req, res, next) {
    // deconstruct the req body (excluding favorites since not part of signup)
    const { username, password, zipcode, firstName, lastName } = req.body;
    
    //hash the password using bcrypt
    //store the hashed password in the database 
    const hashPassword = await bcrypt.hash(password, 10);
    console.log('1')
    
    User.find({username: username})
      .then(data => {
        if (data.length === 0) {
          // add user to the database
          User.create( { username, password: hashPassword, zipcode, firstName, lastName } ) 
            .then(data => {
              res.locals.newUser = true;
              console.log('New User: ', data);
              return next();
            })
            .catch(err => {
              return next({
                log: `Error occurred in createUser method of UserController : ${err}`,
                status: 400,
                message: { err : 'An error occurred while creating a new user'}
              });
            });
        } 
        else {
          res.locals.newUser = false
        }
      })
      .catch(err => {
        return next({
          log: `Error occurred in createUser method of UserController : ${err}`,
          status: 400,
          message: { err : 'UserController.createUser error. Error in User.find'}
        });
      })
  },

  // Grab user information from the database
  // username will be the parameter
  getUser(req, res, next) {
    // deconstruct the username that will be sent in the request parameter
    const { username } = req.params;

    User.findOne({username: username})
      .then(data => {
        res.locals.user = data;
        console.log('Found user: ',data);
        return next();
      })
      .catch(err => {
        return next({
          log: `Error occured in getUser method of UserController : ${err}`,
          status: 400,
          message: { err: 'An error occured while trying to get user'}
        });
      });
  },

  //verify user at login 
  async verifyUser  (req, res, next)  {
    const inputUsername = req.body.username;
    const inputPassword = req.body.password;
    User.findOne({username: inputUsername}, (err, user) => {
        bcrypt
          .compare(inputPassword, user.password)
          .then((result) => {
            // res.locals.user = user
            console.log('Result is:' ,result);
            if (!result) {
              res.locals.user = false;
            } else {
              res.locals.user = user;
              return next();
            }
          })
          .catch((err) => next('Error getting user from database: ' + JSON.stringify(err)))
    });
  },

  // Adds a favorite workspace to the user favorites list
  // username will be the parameter and the workspace_id will be in the body
  addFavorite(req, res, next) {
    const { username, workspace_id } = req.body;
    console.log('username', username);
    console.log('workspace_id', workspace_id);
    
    // find based on username 
    // push the workspace_id to the favorites array
    //use $pull to delete a workspace from favorites!!
    User.findOneAndUpdate({ username: username }, { "$push": { favorites: workspace_id }})
      .then(data => {
        res.locals.updatedUser = data;
        console.log('Updated user: ', data);
        return next();
      })
      .catch(err => {
        return next({
          log: `Error caught in addFavorite method of UserController : ${err}`,
          status: 400,
          message: { err: 'An error occured when trying to add a new favorite'}
        })
      });
  },

  deleteFavorite(req, res, next) {
    const { username } = req.body;
    const { workspace_id } = req.body;

    // find based on username 
    //use $pull to delete a workspace from favorites!!
    User.findOneAndUpdate({ username: username }, { "$pull": { favorites: workspace_id }})
      .then(data => {
        res.locals.updatedUser = data;
        console.log('Updated user: ', data);
        return next();
      })
      .catch(err => {
        return next({
          log: `Error caught in addFavorite method of UserController : ${err}`,
          status: 400,
          message: { err: 'An error occured when trying to add a new favorite'}
        })
      });
  },


  // Deletes the user from the database
  // username will be the parameter
  deleteUser(req, res, next) {
    // deconstruct the username from params
    const { username } = req.params;

    // find user based on user params and delete
    // will return the deleted username - don't need to do anything with it
    User.findOneAndDelete({username: username})
      .then(data => {
        res.locals.deletedUser = data;
        console.log('Deleted user: ', data);
        return next();
      })
      .catch(err => {
        return next({
          log: `Error caught in the deleteUser method of UserController : ${err}`,
          status: 400,
          message: { err : 'An error occured when trying to delete a user'}
        })
      });
  }
}

module.exports = UserController;
