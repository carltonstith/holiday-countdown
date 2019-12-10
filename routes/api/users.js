const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User');

/** 
 * @route POST api/users/register
 * @desc Register the User
 * @access Public
*/
router.post('/register', (req, res) => {
    let { 
        name, 
        username, 
        email, 
        password, 
        confirm_password 
    } = req.body
    if(password !== confirm_password) {
        return res.status(400).json({
            msg: "The passwords do not match."
        });
    }
    // Check for a unique username
    User.findOne({
        username: username
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "This username has already been taken."
            });
        }
    })
    // Check for a unique username
    User.findOne({
        email: email
    }).then(user => {
        if (user) {
            return status(400).json({
                msg: "This email has already been registered. Did you forget your password?"
            });
        }
    })
    // The data entered is valid and we can now register a new user
    let newUser = new User({
        name,
        username,
        password,
        email
    });
    // Hash the password using bcrypt.js
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "The user is now registered."
                });
            });
        });
    });
});

/** 
 * @route POST api/users/login
 * @desc Signin the User
 * @access Public
*/
router.post('/login', (req, res) => {
    User.findOne({
        username: req.body.username
    }).then(user => {
        if(!user) {
            return res.status(404).json({
                msg: "This username was not found",
                sucess: false
            });
        }
        // If the user is in the system, compare the password
        bcrypt.compare(req.body.password, user.password).then(
            isMatch => {
                if(isMatch) {
                    // User's password is correct and we need to send the JSON token for that user
                    const payload = {
                        _id: user._id,
                        username: user.username,
                        name: user.name,
                        email: user.email
                    }
                    // Use the JWT package to sign the token for the user
                    jwt.sign(payload, key, { 
                        expiresIn: 604800 
                    }, (err, token) => {
                        res.status(200).json({
                            success: true,
                            token: `Bearer ${token}`,
                            msg: "You are now logged in."
                        })
                    })
                } else {
                    return res.status(404).json({
                        msg: "This password is incorrect.",
                        success: false
                    })
                }
            }
        )
    })
});

/** 
 * @route POST api/users/profile
 * @desc Return the User's Data
 * @access Private
*/
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

module.exports = router;