
import MyCard from "@/components/Card";
import Grid from '@mui/material/Grid2';
import { getAllUser } from "../../_lib/APIcall";
import { GET } from "../../api/users/route";

export const metadata={
    title:"Users"
}
async function Users () {

    
  
    // const users=await getAllUser()
    const res= await GET()
    const users = await res.json();

    
    
    
    return ( 
        <>
        <Grid container spacing={2} sx={{
            justifyContent:"center",
            alignItems:"center",
            marginTop:"10px"
        }}>
          
        
        {/* {users.map((user)=>
            <div key={user.id}>
            <MyCard userId={user.id}  name={user.name} email={user.email} phone={user.phone} website={user.website}/>
            
            </div>
        )} */}
        {users.map((user)=>
            <div key={user._id}>
            <MyCard userId={user._id}  name={user.name} email={user.email}   />
            
            </div>
        )}
        </Grid>
        </>
     );
}
// export const revalidate=60
export default Users;