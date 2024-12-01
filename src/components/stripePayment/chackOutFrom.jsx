'use client';
import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import logo from '@/../../public/assets/logo.png';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState('');
  const router=useRouter();

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
  
    if (!clientSecret) {
      setErrorMessage('Client secret is missing.');
      setLoading(false);
      return;
    }
  
    try {
      console.log('Confirming payment using PaymentElement...');
      const { paymentIntent, error } = await stripe.confirmPayment({
        elements, 
        confirmParams: {
          payment_method_data: {
            billing_details: {
              email: session?.user?.email || 'anonymous@example.com',
              name: session?.user?.name || 'Guest User',
            },
          },
        },
        redirect: 'if_required', // Avoiding unnecessary redirects
      });
  
      if (error) {
        console.error('Payment Error:', error.message);
        setErrorMessage(error.message);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded:', paymentIntent);
  
        // Save payment details to backend
        const response = await axios.post('/api/save-payment', {
          paymentIntentId: paymentIntent.id,
          amount: paymentIntent.amount,
          email: session?.user?.email || 'anonymous@gmail.com',
          status: paymentIntent.status,
        });
  
        const data = response.data;
        console.log('Payment saved to database:', data);
        setPaymentSuccess('Payment successful! Thank you.');
        router.push('/success'); // Redirect after successful payment
      } else {
        setErrorMessage('Payment not completed. Please try again.');
      }
    } catch (err) {
      console.error('Unexpected Error:', err.message);
      setErrorMessage('An unexpected error occurred during payment.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <section className="flex justify-center">
        <Image src={logo} alt="logo" height={200} width={200} />
      </section>
      {/* Stripe Payment */}
      <form onSubmit={handleSubmit} className="w-full min-w-[600px] mx-auto">
        <PaymentElement className="p-3 border border-gray-300 rounded-lg" />
        <button
          disabled={!stripe || !elements || loading}
          className={`btn btn-outline btn-error mt-4 w-full ${
            loading && 'opacity-50 cursor-not-allowed'
          }`}
          type="submit"
        >
          {loading ? 'Processing...' : 'Pay'}
        </button>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        {paymentSuccess && <p className="text-green-500 mt-2">{paymentSuccess}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
