// const { MongoClient } = require("mongodb");

import mongoose from "mongoose";

// let client,databasePromise
// if(!client){
//     client=new MongoClient("mongodb://127.0.0.1:27017/next-project");
//     databasePromise=client.connect()

// }
     
    

// export default databasePromise

export function dbconnection(){
    mongoose.connect("mongodb://127.0.0.1:27017/next-project").then(()=>{console.log("you are connect to data base");
    }).catch((err)=>{console.log(err);
    })
}
