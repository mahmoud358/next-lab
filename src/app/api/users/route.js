// import databasePromise from "@/app/_lib/mongodb";

import userModel from "@/app/_lib/models/users";

const { dbconnection } = require("@/app/_lib/mongodb");

// export async function GET(){
//     const client =await databasePromise;
//     const db=client.db();
//   const users = await db.collection("users").find({}).toArray();
// //   console.log(users);
  
//   return new Response(JSON.stringify(users),{statue:200})

// }


// export async function POST(req){
//     const user=await req.json()
//     const client =await databasePromise;
//     const db=client.db();
//     await db.collection("users").insertOne(user)

//     return new Response("success",{status:201})



// }

dbconnection()

export async function GET(){

  
try{
  const users=await userModel.find()
 
  
  return new Response(JSON.stringify(users),{status:200});
}catch(err){
  return new Response(JSON.stringify({message:"try agin"}),{status:400});

}
  

}

export async function POST(req){
  const user=await req.json()
  console.log(user);
  
  
try{
 
  
  const newUser= await userModel.create(user)
  console.log(newUser);
  
  return new Response(JSON.stringify(newUser),{status:200});
}catch(err){
  console.log(err.message);
  
  return new Response(JSON.stringify({message:err.message}),{status:404});

}
  

}



