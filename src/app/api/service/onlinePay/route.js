export async function POST(req) {
    const { payInfo } = await req.json(); 
    console.log('this is from onlinePay', payInfo);
    console.log("this is hitting from onlinePay");

    // Perform other processing as needed
    
    return new Response("Payment processed", { status: 200 });
}
