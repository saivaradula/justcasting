const express = require('express');
const router = express.Router();

// Authenticate
const auth_controller = require('../controllers/authenticate');

router.post('/login', auth_controller.loginUser);


module.exports = router;