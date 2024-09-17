"use client"

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

function UpdateButton({ id }) {

    const router=useRouter()
  const Update=()=>{

    router.push(`/Users/add?id=${id}`)
    
  }

    return ( 
        <Button variant="contained" onClick={()=>{Update()}}>update</Button>
     );
}

export default UpdateButton;