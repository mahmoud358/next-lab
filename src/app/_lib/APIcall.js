export async function getAllUser(){
   try{
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const users=await res.json()

    return users
   }catch(err){
    return err
   }
}

export async function getUserByID(id){
    try{
        const res=await fetch(`http://localhost:3000/api/users/${id}`)
        const user=await res.json()
    
        return user
       }catch(err){
        return err
       }
   
}