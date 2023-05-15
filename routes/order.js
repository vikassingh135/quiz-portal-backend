const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById, addOrderToUserHistory } = require('../controllers/user');
const { create_order, listOrders, getStatusValues, updateOrderStatus, orderById } = require('../controllers/order');
const { decreaseQuantity } = require('../controllers/product');


// console.log("order create karne ke router par aa gye ho
router.get('/list/:userId',  listOrders);
router.get(
	'/status-values/:userId',
	requireSignin,
	isAuth,
	isAdmin,
	getStatusValues
);
router.put(
	'/update/:orderId/status/:userId',
	requireSignin,
	isAuth,
	isAdmin,
	updateOrderStatus
);

router.post(
	
	"/order_create", create_order
	// () => {
	// 	    requireSignin,
	// 		isAuth,
	// 		addOrderToUserHistory,
	// 		decreaseQuantity,
	// 		create
	// }

);

router.param('userId', userById);
router.param('orderId', orderById);

module.exports = router;
