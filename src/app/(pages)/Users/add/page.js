// "use client"
import { getUserByID } from "@/app/_lib/APIcall";
import userModel from "@/app/_lib/models/users";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
// import { useForm } from "react-hook-form";
// export const metadata={
//     title:"AddUser"
// }
async function AddUser({ searchParams }) {
  // console.log(searchParams);
  // const [user, setUser] = useState({
  //   email: "",
  //   name: "",
  //   userName: "",
  //   password: ""
  // })
  


  // const getUpdateUser = async () => {
  //   const updateUser = await getUserByID(searchParams.id)
  //   console.log(updateUser);

  //   // setUser(user => user = updateUser)
  // }

  // useEffect(() => {
  //   if (searchParams.id) {
  //     getUpdateUser()
  //     // console.log(user);


  //   }
  // }, [])

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm({ mode: "onChange" });
  // let password = watch("password")


  // const router = useRouter()

        
        
    const updateUser = searchParams.id? await getUserByID(searchParams.id):null
        
        console.log(updateUser);
  
  
    
  // const registerTo = async (data) => {

  //   delete data.confirmPassword
  //   console.log(data);

  //   if(searchParams.id){
  //     let user = await fetch("http://localhost:3000/api/users", {
  //       method: "PATCH",
  //       body: JSON.stringify(data)
  //     })

  //   }else{
  //     let user = await fetch("http://localhost:3000/API/users", {
  //       method: "POST",
  //       body: JSON.stringify(data)
  //     })

  //   }

   
  //   console.log(user);
  //   if (user.ok) {
  //     // router.push('/Users')


  //   }




  // }


const registerTo= async(formData)=>{
  "use server";
  const name = formData.get("name");
  const email = formData.get("email");
  const userName = formData.get("userName");


  if (updateUser) {

    await userModel.findByIdAndUpdate(searchParams.id, {name,email, userName });
  } else {
   
    await userModel.insertMany ([{email , name , userName}]);
  }

  revalidatePath('/Users')
  
  redirect("/Users")
}
  return (
    <>
      <Form
        className="row justify-content-center"
        // onSubmit={handleSubmit(registerTo)}
        action={registerTo}
      >
        <div className="mt-3 col-7 ">
          <Form.Label htmlFor="emailHelpBlock">email</Form.Label>
          <Form.Control
            type="email"
            name='email'
            // defaultValue={user.email}
            defaultValue={updateUser?.email||""}
            
            // className={` ${(errors.email) ? "is-invalid" : "is-valid"}`}
            // {...register("email", {
            //   required: true,
            //   pattern: /^[A-Za-z]{3,}@(gmail.com|yahoo.com)$/,

            // })}

          />
          {/* {(errors.email?.type == "required") ? <p className={stylePraEror}>email is required</p> : (errors.email?.type == "pattern") ? <p className={stylePraEror}>invalid email</p> : null} */}
        </div>
        <div className="mt-3 col-7 ">
          <Form.Label htmlFor="emailHelpBlock">name</Form.Label>
          <Form.Control type="text"
            // defaultValue={user.name}
            name='name'
            defaultValue={updateUser?.name || ""}

            // {...register("name", {
            //   required: true,
            // })}

          />
          {/* {(errors.name?.type == "required") ? <p className={stylePraEror}>name is required</p> : null} */}

        </div>
        <div className="mt-3 col-7 ">
          <Form.Label htmlFor="emailHelpBlock">username</Form.Label>
          <Form.Control type="text"
            // defaultValue={user.userName}
            name='userName'
            defaultValue={updateUser?.userName||""}
            
            // {...register("userName", {
            //   required: true,
            //   pattern: /^[a-zA-z]{1,}$/
            // })}
          />
          {/* {(errors.username?.type == "required") ? <p className={stylePraEror}>username is required</p> : (errors.username?.type == "pattern") ? <p className={stylePraEror}>invalid username</p> : null} */}
        </div>

        {/* <div className="mt-3 col-7 ">
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control type="password"
            // defaultValue={user.password}
            // {...register("password", {
            //   required: true,
            //   pattern: /^[A-Za-z\d@$!%*?&]{8,}$/
            // })}
          />

          {(errors.password?.type == "required") ? <p className={stylePraEror}>password is required</p> : (errors.password?.type == "pattern") ? <p className={stylePraEror}>invalid password</p> : null}
        </div> */}
        {/* <div className="mt-3 col-7 ">
          <Form.Label htmlFor="confirm-Password">confirm Password</Form.Label>
          <Form.Control type="password"
            // {...register("confirmPassword", {
            //   required: true,
            //   validate: (value) => value === password,
            // })}
          />
          {(errors.confirmPassword?.type == "required") ? <p className={stylePraEror}>confirmPassword is required</p> : (errors.confirmPassword?.type == "validate") ? <p className={stylePraEror}>invalid confirmPassword</p> : null}

        </div> */}
        <input type="submit" className="btn btn-info col-7 mt-3" />
      </Form>
    </>
  );
}

export default AddUser;