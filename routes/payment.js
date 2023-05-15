const express = require('express');
const router = express.Router();

const { requireSignin, isAuth } = require('../controllers/auth');
const { userById } = require('../controllers/user');
// const { generateToken, processPayment } = require('../controllers/braintree');
const { createOrder, paymentVerification } = require('../controllers/payment');

router.get('/create_order', createOrder);
// router.post('/verify/:userId', requireSignin, isAuth, processPayment);
router.post('/verify', paymentVerification);


router.param('userId', userById);

module.exports = router;
