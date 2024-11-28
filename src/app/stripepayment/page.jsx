'use client'
import ChackOutFrom from '@/components/stripePayment/chackOutFrom'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'

const page = () => {
  const stripePromise = loadStripe('pk_test_51PMlPRCTwpklZGzJZtDzX3YVFsS2swKcgURN2NhpsOTLzRkrVzCk1CQsXeplPWDX0m4WawDKEAYClQhxzoQHmrDd00x6dik1k8');

const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};
  return (
    <div>
      <div className='flex justify-center'>
      payment page
      </div>
      <Elements stripe={stripePromise} options={options}>
      <ChackOutFrom></ChackOutFrom>
        </Elements>
    </div>
  )
}

export default page
