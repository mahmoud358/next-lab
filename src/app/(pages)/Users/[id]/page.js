import { getAllUser, getUserByID } from "@/app/_lib/APIcall";
import MyCard from "@/components/Card";
import { Stack } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export async function generateMetadata({params}){
  
  const user=await getUserByID(params.id)

  return {
    title:user.name
  }

}
export async function generateStaticParams(){

  const users=await getAllUser()

  const ids=users.map(user=>({id:user._id}))



  return ids
}

async function Details({params}) {
    
  
    const user=await getUserByID(params.id)
    // console.log(user);
    
    
    return ( 
        <>
       <div className="vh-75">
       <Stack sx={{
            justifyContent:"center",
            alignItems:"center",
            marginY:"100px",
            
        }}>
        <Card sx={{ minWidth: 275 }} >
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ mb: 1.5 }} >
              Name : {user.name}
            </Typography>
            <Typography variant="body1" component="div" sx={{ mb: 1.5 }}>
              Email : {user.email}
            </Typography>
           
          </CardContent>
          
        </Card>
        </Stack>
       </div>
        </>
     );
}

export default Details;