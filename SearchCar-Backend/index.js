// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())


// mongoose.connect('mongodb://127.0.0.1:27017/car_data', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// },).then(()=>console.log("DB connected"))
// .catch((err)=>{console.log(err);})

// // Rotes
// app.get("/",(req,res)=>{
//     res.send("my apii")
// })
// app.listen(9002,()=>{
//     console.log("started port 9002");
// })

const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database='car_data'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    let db=result.db(database)
    let collection = db.collection('product_info');
    let response = await collection.find({}).toArray()
    console.log(response) 
}

getData();
