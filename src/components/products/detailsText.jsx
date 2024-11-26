"use client";
import useOneProduct from "@/Hooks/useOneProduct";
import React, { useEffect, useState } from "react";
import AddAndSubBtn from "./addAndSubBtn";
import axios from "axios";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export const handelIncrese = async (
  newValue,
  setCardItem,
  setStock,
  id,
  refetch,
  mode
) => {
  console.log("newValue from details", newValue);
  setCardItem(newValue);
  if (newValue >= 0) {
    // console.log("Updating stock for product ID:", id);
    setStock(newValue);
  } else {
    alert("Stock cannot be less than zero.");
    console.log("Stock cannot be less than zero.");
  }
};

const DetailsText = ({ id }) => {
  const [oneProduct, isLoading, refetch] = useOneProduct(id);
  const [stock, setStock] = useState(0);
  const [cardItem, setCardItem] = useState(0);
  const session = useSession();
  const router = useRouter();
  // console.log("id of product",oneProduct)
  const handelCardList = async () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    // console.log(currentDate);
    const productData = {
      name: oneProduct.name,
      title: oneProduct.title,
      category: oneProduct.category,
      review: oneProduct.review,
      brand_name: oneProduct.brand_name,
      price: oneProduct.price,
      size: oneProduct.size,
      retailer_name: oneProduct.retailer_name,
      quantity: stock,
      order_type: "card",
      order_date: currentDate
    };

    console.log("Product Data:", productData);
    const email = session.data.user.email;

    Swal.fire({
      title: "Are you sure?",
      text: "You want to order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Order Now",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.post(`/api/user/${email}`, { productData });
          const { modifiedCount } = res.data.result;
          if (modifiedCount >= 1) {
            Swal.fire({
              title: "Order Placed!",
              text: "Your order was successfully received.",
              icon: "success",
            });
            // setTimeout(() => {
            //   // here is the path of payment route
            //   router.push("/stripepayment");
            // }, [2000]);
          } else {
            Swal.fire({
              title: "Order Failed",
              text: "Unable to process your order. Please try again later.",
              icon: "error",
            });
          }
        } catch (error) {
          console.error("Error placing order:", error);
          Swal.fire({
            title: "Error",
            text: "An error occurred while processing your order.",
            icon: "error",
          });
        }
      }
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!oneProduct) {
    return <div>No product found.</div>;
  }

  return (
    <div className="text-2xl grid gap-3">
      <p className="font-semibold">{oneProduct?.name}</p>
      <p>Brand: {oneProduct?.brand_name}</p>
      <hr />
      <div className="flex justify-between px-2 gap-6">
        <div className="grid">
          <p className="opacity-40">Price</p>
          <p>${oneProduct?.price}</p>
        </div>
        <div className="grid">
          <p className="opacity-40">Available Size</p>
          <p>${oneProduct?.size}</p>
        </div>
      </div>
      <hr />
      <p>Description: {oneProduct?.description}</p>
      <hr />
      <p>Last {oneProduct?.quantity || 1} left, make it yours</p>
      <div className="flex gap-6">
        <AddAndSubBtn
          stock={stock}
          setCardItem={setCardItem}
          setStock={setStock}
          id={oneProduct?._id}
          refetch={refetch}
        />
        <button
          className={`btn btn-outline ${cardItem <= 0 ? "disable" : ""}`}
          disabled={cardItem <= 0}
          onClick={() => handelCardList()}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DetailsText;
