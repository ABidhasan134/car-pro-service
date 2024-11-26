import { NextResponse } from "next/server";
import SSLCommerzPayment from "sslcommerz-lts";
import fetch from "node-fetch"; // Polyfill for fetch
global.fetch = fetch; // Make fetch globally available

const store_id = "lifeo6673efa4bcdf3";
const store_passwd = "lifeo6673efa4bcdf3@ssl";
const is_live = false;

export async function POST(req) {
  try {
    const { payInfo } = await req.json();

    const data = {
      total_amount: payInfo.price,
      currency: "BDT",
      tran_id: `REF${Date.now()}`,
      success_url: "http://localhost:3000/success-payment",
      fail_url: "http://localhost:3000/fail",
      cancel_url: "http://localhost:3000/cancel",
      ipn_url: "http://localhost:3000/ipn",
      shipping_method: "Courier",
      product_name: payInfo.name || "Service",
      product_category: "services",
      product_profile: "general",
      cus_name: payInfo.userName || "Customer",
      cus_email: payInfo.userEmail || "customer@example.com",
      cus_add1: "Dhaka",
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: "01711111111",
      cus_fax: "01711111111",
      ship_name: payInfo.userName || "Customer",
      ship_add1: "Dhaka",
      ship_add2: "Dhaka",
      ship_city: "Dhaka",
      ship_state: "Dhaka",
      ship_postcode: "1000",
      ship_country: "Bangladesh",
    };

    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);

    const apiResponse = await sslcz.init(data);

    if (apiResponse?.GatewayPageURL) {
      console.log("Redirecting to: ", apiResponse.GatewayPageURL);
      return NextResponse.json({ url: apiResponse.GatewayPageURL });
    } else {
      console.error("Invalid API response:", apiResponse);
      return new Response("Failed to initiate payment", { status: 500 });
    }
  } catch (error) {
    console.error("Error in processing payment:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
