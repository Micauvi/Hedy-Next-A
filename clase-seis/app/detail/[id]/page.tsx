"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { id } = useParams<{ id?: string }>();
  const [oneComment, setOneComment] = useState({});
  useEffect(() => {
    async function getComments() {
      const res = await axios.get(`http://localhost:3000/api/comments/${id}`);

      setOneComment(res.data);
    }
    getComments();
  }, []);

  return (
    <div className="bg-gray-200 shadow-md rounded-lg p-4 flex space-x-10 items-center    border-2 border-gray-400 mb-5 justify-between">
      <img
        src={oneComment?.avatar}
        alt={oneComment?.name}
        className="w-20 h-20 rounded-full"
      />
      <div className="justify-center items-center  flex-col flex">
        <p className="font-semibold text-xl">{oneComment?.name}</p>
        <p className="text-gray-800 text-xl">{oneComment?.comment}</p>
      </div>
      <div className="flex ">
        <button className="border-2 border-gray-800 w-32 h-14 text-lg  font-bold rounded-xl ">
          View Post
        </button>
      </div>
    </div>
  );
};

export default page;
