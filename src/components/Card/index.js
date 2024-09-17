
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';
import DeleteButton from '../deletebutton/deletebutton';
import UpdateButton from '../updatebutton/updatebutton';
// import { useRouter } from 'next/router';
function MyCard({ userId,name, email, phone, website }) {
  // const router = useRouter()
  return (
    <>
      <Grid >


        <Card sx={{ minWidth: 275 }} >
          <CardContent>
            <Typography variant="h6" gutterBottom >
              Name : {name}
            </Typography>
            <Typography variant="body1" component="div">
              Email : {email}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Phone : {phone}</Typography>
            <Typography variant="body2">
              Website : {website}
            </Typography>
          </CardContent>
          <CardActions>
            <Link  href={`/Users/${userId}`}>Detials</Link>
            <DeleteButton  id={userId}/>
            <UpdateButton id={userId}/>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default MyCard;