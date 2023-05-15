const app = require("express")();
const path = require("path");

const cors = require("cors");

// const shortid = require("shortid");
const Razorpay = require("razorpay");
const { create } = require("./order");



app.use(cors());
const createOrder = async (req, res) => {
    let instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_SECRET })

    var options = ({
        amount: Number(req.body.amount) * 100,
        currency: "INR",
    });

    instance.orders.create(options, function (err, order) {
        if (err) {
            return res.send({ code: 500, message: 'Server Error..' })
        }
        return res.json(order);
    });
};

const paymentVerification = async (req, res) => {
    let body = req.body.paymentData.order_id + "|" + req.body.paymentData.payment_id;

    var crypto = require("crypto");
    var expectedSignature = crypto.createHmac('sha256', '<YOUR_API_SECRET>')
        .update(body.toString())
        .digest('hex');
    console.log("sig received ", req.body.response.razorpay_signature);
    console.log("sig generated ", expectedSignature);
    var response = { "signatureIsValid": "false" }
    if (expectedSignature === req.body.response.razorpay_signature) {
        response = { "signatureIsValid": "true" }

        await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        });

    }
    if(response.signatureIsValid==false) res.redirect("http:localhost:3000/cart");
    res.send(response);
};

module.exports = { createOrder, paymentVerification };