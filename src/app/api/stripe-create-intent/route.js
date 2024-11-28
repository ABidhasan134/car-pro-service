import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY); 

export async function POST(request) {
  try {
    const body = await request.json(); 
    const amount = parseInt(body.price * 100); // Convert price to cents stripe give amount as cents

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card'], 
    });
    console.log("Hiting here the payment",paymentIntent.client_secret)
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret, 
    });
  } catch (error) {
    console.error('Error creating payment intent:', error.message);
    return NextResponse.json(
      { error: error.message },
      { status: 500 } 
    );
  }
}
