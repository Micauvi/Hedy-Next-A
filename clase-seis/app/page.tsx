"use client";
import Image from "next/image";
import CommentForm from "./components/CommentForm";
import CartComment from "./components/cartComment";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [comments, setComments] = useState([]);

  
  const mergeData = (body) => {
    setComments(prevData => [body, ...prevData])
  }
  useEffect(() => {
    const FetchComments = async () => {
      const res = await axios.get("http://localhost:3000/api");      
      setComments(res.data.dataComments);
    };
    FetchComments();
  }, [ ]);
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Comments</h1>
      <CommentForm  refresh={mergeData} />
      <div>
        {comments?.map((comment, index) => (
          <CartComment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
}

// import Image from "next/image";
// import CommentForm from "./components/CommentForm";
// import CartComment from "./components/cartComment";
// export async function getComments() {
  //  const res = await fetch("http://localhost:3000/api");
  
  //  if (!res.ok) {
    //    throw new Error("Failed to fetch data");
    //  }
//  return res.json();
// }

// export default async function Home() {
//   const data = await getComments();
//   console.log("DATA QUE ME TRAE", data);
  