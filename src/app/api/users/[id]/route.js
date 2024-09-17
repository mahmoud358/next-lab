import userModel from "@/app/_lib/models/users";

export async function GET(req, { params }) {
    try {
        const user = await userModel.findById(params.id)
        console.log(user);

        return new Response(JSON.stringify(user), { status: 200 });

    } catch {
        return new Response({ message: "user not found" }, { status: 404 });


    }


}


export async function DELETE(req, { params }) {
    
    try {
        await userModel.findOneAndDelete({ _id: params.id })

        return new Response({ message: "deleted" }, { status: 200 });
    } catch (err) {
       
        
        return new Response({ message: err.message }, { status: 404 });

    }


}

export async function PATCH(req, { params }){
    const updateUser=req.json()
    console.log(updateUser);
    
    // updateUser._id=params.id

  const curuntUser = await userModel.findByIdAndUpdate(params.id,updateUser)
  console.log(curuntUser);

  if(!curuntUser){
    return new Response({ message: "user not found" }, { status: 404 });
  }

//   await updateUser.save()

  return new Response(JSON.stringify(updateUser), { status: 201 });




}

