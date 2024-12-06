import connectionDB from "@/lib/connectionDB"

export async function POST(request,{params}){
    const db= await connectionDB();
    const userCollection= db.collection('users')
    const body= await request.json();
    try{

    }
    catch(error){
        console.log("making online request failed: ", error)
    }
}