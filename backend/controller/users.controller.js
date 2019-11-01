﻿const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);
router.post('/forgot_password', forgot_password);
router.get('/verifyEmail/:token', verifyEmail);
router.get('/reset/:token', ResponseResetToken);
router.post('/reset_password', ResponseResetPassword);
router.post('/regenerateEmailVerifyLink', regenerateEmailVerifyLink);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Email or password is incorrect' }))
        .catch(err => next(err));
}

function regenerateEmailVerifyLink(req, res, next) {
    userService.regenerateEmailVerifyLink(req)
    .then(data => res.json({message:data}))
    .catch(err => next(err));
}

function ResponseResetToken(req, res, next) {
    userService.ResponseResetToken(req.params)
    .then(data => data.token ? res.json(data) : res.sendStatus(404))
    .catch(err => next(err));
}

function ResponseResetPassword(req, res, next) {
    userService.ResponseResetPassword(req.body)
    .then(data => data ? res.json(data) : res.sendStatus(404))
    .catch(err => next(err));
}

function forgot_password(req, res, next) {
    userService.forgot_password(req)
    .then(data => res.json(data))
    .catch(err => next(err));
}

function verifyEmail(req, res, next) {
    userService.verifyEmail(req.params)
    .then(data => res.json(data))
    .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req)
        .then(data => res.json(data))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(data => res.json(data))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(data => res.json(data))
        .catch(err => next(err));
}