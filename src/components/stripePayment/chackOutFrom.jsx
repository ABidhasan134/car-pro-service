"use client";
import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useSession } from "next-auth/react";
import Image from "next/image";
import logo from "@/../../public/assets/logo.png";
import { useRouter } from "next/navigation";
import axios from "axios";
import useOneProduct from "@/Hooks/useOneProduct";
import { getServiceDetails } from "@/app/services/[id]/page";

const CheckoutForm = ({ clientSecret, productId, type }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const router = useRouter();
  const [oneProduct, isLoading, refetch] = useOneProduct(productId);
  const exchangeRet = 110;
  const [serviceDetails,setServiceDetails] =useState([]);

  const date = new Date();
  const currentDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;


  useEffect(() => {
    if (productId) {
      getServiceDetails(productId)
        .then((serviceDetails) => {
          const data = serviceDetails.result;
          setServiceDetails(serviceDetails)
          console.log("product from payment page", serviceDetails);
        })
        .catch((error) => {
          console.error("Error fetching service details:", error);
        });
    }
  }, [productId]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setPaymentSuccess("");

    if (!stripe || !elements) {
      setErrorMessage("Stripe is not loaded yet.");
      setLoading(false);
      return;
    }

    if (!clientSecret) {
      setErrorMessage("Client secret is missing.");
      setLoading(false);
      return;
    }

    try {
      const { paymentIntent, error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              email: session?.user?.email || "anonymous@example.com",
              name: session?.user?.name || "Guest User",
            },
          },
        },
        redirect: "if_required",
      });

      if (error) {
        setErrorMessage(error.message);
      }
      if (
        paymentIntent &&
        paymentIntent.status === "succeeded" &&
        type === "service"
      ) {
        console.log("hit in service");
        const response = await axios.post("/api/save-payment", {
          paymentIntentId: paymentIntent.id,
          amount: paymentIntent.amount / exchangeRet,
          email: session?.user?.email || "anonymous@gmail.com",
          status: paymentIntent.status,
          Item_id: serviceDetails._id || 10314,
          Item_name: serviceDetails.title || "abid hasan",
          retailer_name: serviceDetails.retailer_name || 'Motor Magic',
          singel_price: serviceDetails.price || 5410000,
          product_type: 'service++',
          pay_date: currentDate
        });

        if (response.data.success) {
          setPaymentSuccess("Payment successful! Thank you.");
          router.push(`/success?id=${serviceDetails._id}&type=service`);
        } else {
          setErrorMessage("Failed to save payment. Please contact support.");
        }
      } else if (
        paymentIntent &&
        paymentIntent.status === "succeeded" &&
        type === "product"
      ) {
        const response = await axios.post("/api/save-payment", {
          paymentIntentId: paymentIntent.id,
          amount: paymentIntent.amount / exchangeRet,
          email: session?.user?.email || "anonymous@gmail.com",
          status: paymentIntent.status,
          Item_id: oneProduct._id || 10314,
          Item_name: oneProduct.name || "abid hasan",
          retailer_name: oneProduct.retailer_name || "user001",
          singel_price: oneProduct.price || 5410000,
          product_type: 'Product',
          pay_date: currentDate
        });

        if (response.data.success) {
          setPaymentSuccess("Payment successful! Thank you.");
          router.push(`/success?id=${oneProduct._id}&type=Product`);
        } else {
          setErrorMessage("Failed to save payment. Please contact support.");
        }
      } else {
        setErrorMessage("Payment not completed. Please try again.");
      }
    } catch (err) {
      setErrorMessage("An unexpected error occurred during payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="flex justify-center">
        <Image src={logo} alt="logo" height={200} width={200} />
      </section>
      <form onSubmit={handleSubmit} className="w-full min-w-[600px] mx-auto">
        <PaymentElement className="p-3 border border-gray-300 rounded-lg" />
        <button
          disabled={!stripe || !elements || loading}
          className={`btn btn-outline btn-error mt-4 w-full ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
          type="submit"
        >
          {loading ? "Processing..." : "Pay"}
        </button>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        {paymentSuccess && (
          <p className="text-green-500 mt-2">{paymentSuccess}</p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
