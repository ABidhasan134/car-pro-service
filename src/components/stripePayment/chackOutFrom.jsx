'use client';
import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { data: session } = useSession(); // Corrected session access
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    
    const fetchClientSecret = async () => {
      try {
        const response = await axios.post('/api/stripe-create-intent')
        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error('Error fetching client secret:', error);
        setErrorMessage('Failed to initialize payment. Please try again.');
      }
    };

    fetchClientSecret();
  }, []);

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

    // Create payment method
    const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: card,
    });

    if (paymentMethodError) {
      setErrorMessage(paymentMethodError.message);
      setLoading(false);
      return;
    }

    // Confirm card payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
      receipt_email: session?.user?.email || 'anonymous',
    });

    if (confirmError) {
      setErrorMessage(confirmError.message);
      setLoading(false);
    } else {
      setPaymentSuccess('Payment successful! Thank you for your purchase.');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-5 gap-2 min-w-[400px]">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        disabled={!stripe || !elements || loading || !clientSecret}
        className={`btn btn-primary my-4 ${loading && 'opacity-50 cursor-not-allowed'}`}
        type="submit"
      >
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {paymentSuccess && <p className="text-green-500">{paymentSuccess}</p>}
    </form>
  );
};

export default CheckoutForm;
