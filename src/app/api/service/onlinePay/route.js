import { NextResponse } from 'next/server';
import SSLCommerzPayment from  'sslcommerz-lts';
const store_id = 'lifeo6673efa4bcdf3';
      const store_passwd = 'lifeo6673efa4bcdf3@ssl';
      const is_live = false;
      
export async function POST(req) {
    try {
      const { payInfo } = await req.json();
      console.log(payInfo)
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
    console.log("Initializing payment with SSLCommerz:", sslcz);

    const apiResponse = await sslcz.init(data);

    console.log("API Response from SSLCommerz:", apiResponse);
    console.log("API Response:", apiResponse);

    const { GatewayPageURL } = apiResponse;

    if (GatewayPageURL) {
      console.log("Redirecting to:", GatewayPageURL);
      return NextResponse.json({ url: GatewayPageURL });
    } else {
      console.error("GatewayPageURL is missing in API response.");
      throw new Error("Failed to retrieve GatewayPageURL.");
    }
    } catch (error) {
      console.error("Error in processing payment:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  }
  
