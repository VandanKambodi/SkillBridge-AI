const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB")
        
        // Drop old username index if it exists
        try{
            const db=mongoose.connection.db
            await db.collection('users').dropIndex('username_1')
            console.log("Dropped old username_1 index")
        }
        catch(err){
            // Index doesn't exist, which is fine
        }
    }
    catch(err){
        console.log("connectDBErr: ", err.message)
        process.exit(1)
    }
}
module.exports=connectDB