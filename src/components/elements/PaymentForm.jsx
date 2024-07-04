import React, { useState } from 'react';
import { CardElement, useElements, useStripe, Elements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from 'react-redux';
import { cartProducts } from '../../store/slices/cartSlice';
import { getAddress } from '../../store/slices/addressSlice';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function PaymentForm() {
const [loading, setLoading] = useState(false)
consr [error, setError] = useState(null)
const dispatch = useDispatch()
const cartItems = useSelector(cartProducts)
const address = useSelector(getAddress)
const navigate = useNavigate()




  return (
    <form className="md:-2/3 md:mx-auto px-2 pt-1" id="payment-form" onSubmit={handleSubmit}>
    <label htmlFor="card-element" className="pt-4 text-2xl md:text-center">Please enter your card details</label>
    <div className="my-4">
        <CardElement id="card-element" />
    </div>
    <div className="flex justify-center p-2">
        <Button type="submit" disbled={loading}>
            {
                loading ?
                'Loading...' :
                'Pay Now'
            }
        </Button>
    </div>
</form>
  )
}

export default PaymentForm
