'use client';
import React, { useState } from 'react';
import { useStripe, useElements, CardElement, PaymentElement } from '@stripe/react-stripe-js';
import { useSession } from 'next-auth/react';

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setPaymentSuccess('');

    if (!stripe || !elements) {
      setErrorMessage('Stripe is not loaded yet.');
      setLoading(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setErrorMessage('Card Element not found.');
      setLoading(false);
      return;
    }

    // Ensure the `clientSecret` is valid
    if (!clientSecret) {
      setErrorMessage('Client secret is missing.');
      setLoading(false);
      return;
    }

    // Confirm the card payment
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          email: session?.user?.email || 'anonymous',
        },
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
    } else {
      setPaymentSuccess('Payment successful! Thank you.');
      console.log('Payment Intent:', paymentIntent);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full min-w-[600px] mx-auto">
      
      <PaymentElement className="p-3 border border-gray-300 rounded-lg"
        options={{
          appearance: true, // Let Stripe's appearance API handle styling
        }
      }
      />
      <button
        disabled={!stripe || !elements || loading}
        className={`btn btn-primary mt-4 w-full ${loading && 'opacity-50 cursor-not-allowed'}`}
        type="submit"
      >
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      {paymentSuccess && <p className="text-green-500 mt-2">{paymentSuccess}</p>}
    </form>
  );
};

export default CheckoutForm;
