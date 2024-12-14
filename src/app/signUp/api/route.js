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
            console.log("user already exists")
            return NextResponse.json({message:'user exists'},{status: 200})
        }
        
        if(newUser.role==='admin' || newUser.role==='retailer')
        {
            const userInfo={name:newUser.name, email:newUser.email,password:newUser.password,role:newUser.role,userStatus:"panding"}
            const resp=await userCollection.insertOne(userInfo);
            console.log("here is admin and retailer",resp);
            return NextResponse.json({message:'success'},{status:200})
        }
        const userInfo={name:newUser.name, email:newUser.email,password:newUser.password,role:newUser.role,userStatus:"ok"}
        const resp=await userCollection.insertOne(userInfo);
        console.log(resp);
        return NextResponse.json({message:'success'},{status:200})
    }
    catch(err){
        return NextResponse.json({message:'faild'},{status:304})
    }

}