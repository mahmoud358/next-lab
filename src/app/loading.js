import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
function Loading() {
    return ( 
        <>
        
         <Stack sx={{ color: 'grey.500',
         justifyContent:"center",
         alignItems:"center" ,
         marginY:"100px"

         }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
        </Stack>
        </>
     );
}

export default Loading;