"use client";

import axios from "axios";
import { useState } from "react";

const CommentForm = ({refresh}) => {
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api", {
        name: name,
        comment: comments,
      });
      refresh(res.data)
      
    } catch (error) {
      console.error(error);
    }

    setName("");
    setComments("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full border border-gray-300 rounded-md p-2 mb-2"
        required
      />
   
      <textarea
        placeholder="Comment"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        className="block w-full border border-gray-300 rounded-md p-2 mb-2"
        required
      ></textarea>
      <button 
   
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
