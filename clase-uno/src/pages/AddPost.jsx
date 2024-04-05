import React, { useState } from "react";

const AddPost = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !imageURL) return;

    setTitle("");
    setDescription("");
    setImageURL("");
  };

  return (
    <div className="max-w-xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md h-screen">
      <h2 className="text-2xl font-semibold mb-4">Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
            placeholder="Enter the post title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
            rows="4"
            placeholder="Enter the post description"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="imageURL"
            className="block text-gray-700 font-semibold mb-2"
          >
            Image
          </label>
          <input
            type="url"
            id="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
            placeholder="Enter the image"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
