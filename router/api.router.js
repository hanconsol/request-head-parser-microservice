const express = require('express');
const router = express.Router();

const {whoAmI, hello} = require('../controllers/api.controller.js');

router.get('/whoami', whoAmI);

router.get('/hello', hello);

module.exports = router;