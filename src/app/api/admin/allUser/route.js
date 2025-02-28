import { NextResponse } from "next/server";

export async function GET(){
    try{
        const rusult=[1,2,3,4,5,6,7,8,9]
        return NextResponse.json({
            message: "you have all user successfully",
            status: 200,
            rusult
        })
    }
    catch(e){
        return NextResponse.json({
            message: "error",
            status: 500
        })
    }
}