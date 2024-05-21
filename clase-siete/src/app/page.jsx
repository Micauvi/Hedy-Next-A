import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import Navbar from './component/Navbar';
import axios from "axios";
import NotLogin from "./component/NotLogin";


export default async function Home() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({cookies : ()=> cookieStore})
  const {data:{user}} = await supabase.auth.getUser()


  if(!user){
    return <NotLogin />
    
  }
async function getPost(){
 const res = await fetch("https://jsonplaceholder.typicode.com/posts")
 if (!res.ok) {
  throw new Error("Failed to fetch data");
}
 return res.json()
}
const data = await getPost()

  return (
    <main className="bg-cyan-900  text-white">
      <Navbar/>
     <div className="m-4 flex flex-col items-center">
    {
      data.map((item, i)=>(
        <div className="border-2 border-cyan-950 p-4 rounded-xl mb-5 w-3/4"> 

        <h1>{item.title}</h1>
        <h3>{item.body}</h3>
        </div>
      ))
    }
     </div>
 
    </main>
  );
}
