var express = require('express');
var router = express.Router();
var userController = require('../controllers/users')
var servicesController = require('../controllers/services')

router.get('/user', userController.getUser);
router.get('/users', userController.getAllUsers);
router.post('/user', userController.createUser);
router.post('/addService', servicesController.addService);
router.get('/getService', servicesController.getServices);

module.exports = router;