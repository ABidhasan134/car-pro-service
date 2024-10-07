const { MongoClient, ServerApiVersion } = require("mongodb");

let db;

 const connectionDB=async()=>{
    if(db){
        return db;
    }
    try{
        const uri = `mongodb+srv://foodrunner:rsOz1DW39eDLNbTf@cluster0.il352b3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        const client = new MongoClient(uri, {
          serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          },
        });
        db = client.db('carDoctor')
        console.log("MongoClient is now connected")
        return db;
    }
    catch(error){
        console.log(error);
    }
}