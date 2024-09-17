"use client"
import { Button } from "@mui/material";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

function DeleteButton({ id }) {
    const router = useRouter()
    const deleteUser = async () => {
        await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "DELETE"

        })

        // revalidatePath('/Users')

    }
    return (
        <Button onClick={() => {
            deleteUser()
        }}>delete</Button>
    );
}

export default DeleteButton;