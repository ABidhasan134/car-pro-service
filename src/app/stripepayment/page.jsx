'use client';
import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import CheckoutForm from '@/components/stripePayment/chackOutFrom';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
// console.log(process.env.NEXT_STRIPE_PRIMARY_KEY);
const stripePromise = loadStripe('pk_test_51PMlPRCTwpklZGzJZtDzX3YVFsS2swKcgURN2NhpsOTLzRkrVzCk1CQsXeplPWDX0m4WawDKEAYClQhxzoQHmrDd00x6dik1k8'); 


const PaymentPage = () => {
  const [clientSecret, setClientSecret] = useState(null);
  const searchParams = useSearchParams();
  const price = searchParams.get('price');
  // console.log("price of product",price)
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await axios.post('/api/stripe-create-intent', { price: price || 323 });
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
      }
    };

    createPaymentIntent();
  }, [price]);

  // console.log("client secret is here",clientSecret)

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
    loader: 'auto',
  };

  return (
    <div className="flex justify-center items-center min-h-[600px]">
      {clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
         <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      ) : (
        <p>Loading payment details...</p>
      )}
    </div>
  );
};

export default PaymentPage;
