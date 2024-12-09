import connectionDB from "@/lib/connectionDB";

export async function GET(){
    const db= await connectionDB();
    
    try{

    }
    catch(error){
        console.log("error form mechanic route" , error);
    }
}