import Image from "next/image";
import styles from "./page.module.css";
import { auth } from "../_lib/auth";

export default async function Home() {

  const detailes= await auth()
  return (
    <main >
      <h1>Home Page</h1>
      {detailes?.user&&<h1>{detailes.user.name}</h1>}
    </main>
  );
}
