import { Alert } from "../components/elements/Alert";
import React from 'react'

function PaymentSuccess() {
  return (
    <div className="max-w-lg mx-auto p-4">
    <Alert variant="success">
        Your payment was successful
    </Alert>
</div>
  )
}

export default PaymentSuccess
