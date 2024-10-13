import connectionDB from "@/lib/connectionDB"
import { NextResponse } from "next/server";
// create a new user by signUp
export const POST = async(request)=>{
    const newUser= await request.json();
    try{
        const db=await connectionDB();
        const userCollection=db.collection("users");
        const user= await userCollection.findOne({email:newUser.email});
        if(user){
            return NextResponse.json({message:'user exists'},{status: 304})
        }
        const resp=await userCollection.insertOne(newUser);
        console.log(resp);
        return NextResponse.json({message:'success'},{status:200},resp)
    }
    catch(err){
        return NextResponse.json({message:'faild'},{status:304})
    }

}