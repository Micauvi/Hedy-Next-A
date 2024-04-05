import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import PostDetail from "./pages/PostDetail";
import Soon from "./pages/Soon";
import Footer from "./components/Footer";
import PostCard from "./pages/PostCard";
import NotFound from "./pages/NotFound";
import AddPost from "./pages/AddPost";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/soon" element={<Soon />} />
        <Route path="/posts" element={<PostCard />} />
        <Route path="addPost" element={<AddPost />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
