import { instance } from '.././index.js';
import crypto from "crypto";
const Order = require('../models/orderModel.js');

const calculatedAmount = (orderedItems) => {
    const totalPrice = orderedItems.reduce((accumulatedAmount, currentItem) => accumulatedAmount + currentItem.price * currentItem.amount, 0);
    return totalPrice * 100;
}

export const checkout = async (req, res) => {
    const { orderItems, shippingAddress, userId } = req.body;

    var options = {
        amount: calculatedAmount(orderItems),
        currency: "INR",
        receipt: "order_rcptid_11"
    };

    const order = instance.orders.create(options);

    res.status(200).json({
        success: true,
        order,
    })
}


export const paymentVerification = async (req, res) => {
    const 
}